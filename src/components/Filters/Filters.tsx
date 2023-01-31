import './Filters.scss';
import TypeChip from '../TypeChip/TypeChip';
import {
  allTypes,
  ForeningTypeValues,
  GroupTypeValues,
} from '../../types/types';

interface FiltersProps {
  currentValue: ForeningTypeValues | GroupTypeValues | undefined;
  filterType: 'forening' | 'group';
  setFilter: (filterValue: string | undefined) => void;
  label: string;
}

const Filters = ({
  currentValue,
  filterType,
  setFilter,
  label,
}: FiltersProps) => {
  return (
    <div className="filters-wrapper">
      <div className="filters-text">{label}</div>
      {Object.values(allTypes[filterType]).map((value) => {
        let color: string | undefined;
        if ('color' in value) {
          color = value.color as string;
        }
        return (
          <TypeChip
            key={value.id}
            value={value.id as ForeningTypeValues | GroupTypeValues}
            color={color}
            selected={currentValue === value.id}
            onClick={setFilter}
          >
            {value.label}
          </TypeChip>
        );
      })}
    </div>
  );
};

export default Filters;
