import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";

import './item-details.css';

const swapiService = new SwapiService();

const {
  getPerson
} = swapiService;

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

const detailsWithData = (View, getData) => {
  return class extends Component {

    state = {
      item: null
    };

    componentDidUpdate(prevProps) {
      if(prevProps.itemId === this.props.itemId) return;
      this.updateItem();
    };

    componentWillMount() {
      this.updateItem();
    }

    updateItem() {
      const { itemId } = this.props;
      if(!itemId) return;
      getData(itemId)
        .then((item) => {
          this.setState({
            item
          });
        });
    };

    render() {

      const { item } = this.state;

      if(!item) return <span>Select a item from a list</span>;

      const { image, name } = item;

      const details = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, { item });
      })

      return(
        <View 
          details={details} 
          image={image} 
          name={name} />
      )
    }
  }
}

export default detailsWithData(ItemDetails, getPerson);
