import React from 'react';

import './item-list.css';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {

  const items = data.map((item) => {
    const label = renderLabel(item);
    return (
      <li 
        key={item.id}
        className="list-group-item"
        onClick={() => onItemSelected(item.id)}>
        {label}
      </li>   
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};


export default ItemList;
