import './ListView.scss';
import { useEffect, useState } from 'react';
import DNTService, { Forening } from '../../services/DNTService';
import ListItem from '../ListItem/ListItem';
import {
  allTypes,
  ForeningTypeValues,
  GroupTypeValues,
} from '../../types/types';
import TypeChip from '../TypeChip/TypeChip';

interface ListViewProps {
  currentForeningTypeFilter: ForeningTypeValues | undefined;
  currentGroupTypeFilter: GroupTypeValues | undefined;
}

const ListView = ({
  currentForeningTypeFilter,
  currentGroupTypeFilter,
}: ListViewProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [foreninger, setForeninger] = useState<Forening[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const fetchForeninger = async () => {
    setIsLoading(true);
    const foreningerList = await DNTService.getForeninger(
      pageNumber * 50,
      currentForeningTypeFilter,
      currentGroupTypeFilter
    );
    setForeninger(foreningerList);
    setIsLoading(false);
  };

  const handleChangePageClick = (direction: 'back' | 'forward') => {
    if (direction === 'back') {
      if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
      }
    }
    if (direction === 'forward') {
      if (foreninger.length === 50) {
        setPageNumber(pageNumber + 1);
      }
    }
  };

  useEffect(() => {
    setPageNumber(0);
    fetchForeninger().catch(() => {});
  }, [currentForeningTypeFilter, currentGroupTypeFilter]);

  useEffect(() => {
    fetchForeninger().catch(() => {});
  }, [pageNumber]);

  return (
    <>
      <section>
        <div className="list-view-page-number-row">
          <div
            className="clickable"
            role="button"
            onClick={() => handleChangePageClick('back')}
          >
            {'<'}
          </div>
          <div>side {pageNumber + 1}</div>
          <div
            className="clickable"
            role="button"
            onClick={() => handleChangePageClick('forward')}
          >
            {'>'}
          </div>
        </div>
      </section>
      {isLoading ? (
        <div>Laster inn foreninger...</div>
      ) : (
        <section>
          {foreninger.map((forening) => (
            <ListItem
              key={forening.id}
              title={forening.name}
              description={forening.description}
              chips={
                <>
                  <TypeChip
                    color={
                      allTypes.forening[forening.type as ForeningTypeValues]
                        .color
                    }
                  >
                    {forening.typeName}
                  </TypeChip>
                  {forening.groupType && (
                    <TypeChip>{forening.groupTypeName}</TypeChip>
                  )}
                </>
              }
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ListView;
