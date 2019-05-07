import React, { Component } from 'react';
import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

class ItemDetails extends Component {
  render() {
    const { image, name } = this.props;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {this.props.details}
          </ul>
        </div>
      </div>
    );
  };
};

export default ItemDetails;
