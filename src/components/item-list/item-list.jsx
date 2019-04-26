import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import Errorindicator from '../error-indicator';

import './item-list.css';

class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    itemList: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.onGetData();
  }

  onUpdateData = (itemList) => {
    this.setState({
      itemList,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onGetData = () => {
    const { getData } = this.props;
    getData()
      .then(this.onUpdateData)
      .catch(this.onError);
  };

  onItemSelected = (id) => {
    this.props.onItemSelected(id);
  };

  renderItems(arr) {
    return arr.map((item) => {
      const label = this.props.children(item);
      return (
        <li 
          key={item.id}
          className="list-group-item"
          onClick={() => this.onItemSelected(item.id)}>
          {label}
        </li>   
      );
    });
  };

  render() {

    const { itemList, loading, error } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const errorIndicator = error ? <Errorindicator /> : null;

    const items = !(loading || error) ? this.renderItems(itemList) : null;

    return (
      <ul className="item-list list-group">
        {spinner}
        {errorIndicator}
        {items}
      </ul>
    );
  };
};

export default ItemList;
