import React from 'react';
import './ListItem.scss';
import { stripHtmlTags } from '../../utils/utils';

interface ListItemProps {
  title: string;
  description: string;
  chips: React.ReactNode;
}

const ListItem = ({ title, description, chips }: ListItemProps) => {
  return (
    <div className="list-item-wrapper">
      <div className="list-item-header">
        <h3>{title}</h3>
        {chips}
      </div>
      <div className="list-item-description">{stripHtmlTags(description)}</div>
    </div>
  );
};

export default ListItem;
