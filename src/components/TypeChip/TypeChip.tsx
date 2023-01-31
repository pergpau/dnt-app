import './TypeChip.scss';
import React from 'react';
import { ForeningTypeValues, GroupTypeValues } from '../../types/types';

interface TypeChipProps {
  color?: string;
  value?: ForeningTypeValues | GroupTypeValues;
  selected?: boolean;
  children: React.ReactNode;
  onClick?: (type: ForeningTypeValues | GroupTypeValues | undefined) => void;
}

const TypeChip = ({
  color = 'var(--color-cool-grey)',
  value,
  selected = false,
  children,
  onClick,
}: TypeChipProps) => {
  const handleClick = () => {
    if (onClick) {
      if (selected) {
        onClick(undefined);
      } else {
        onClick(value);
      }
    }
  };

  return (
    <div
      className={`type-chip-wrapper ${onClick ? 'type-chip-clickable' : ''} ${
        selected ? 'selected' : ''
      }`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <div className="type-chip-text">{children}</div>
    </div>
  );
};

export default TypeChip;
