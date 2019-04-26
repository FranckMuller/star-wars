import React, { Component, Fragment } from 'react';
import ErrorButton from '../error-button';

import './item-details.css';

class ItemDetails extends Component {

  state = {
    item: null
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if(prevProps.selectedItemId !== this.props.selectedItemId) {
      this.updatePerson();
    }
  };

  updatePerson() {
    const { getData, selectedItemId } = this.props;
    if(!selectedItemId) return;
    getData(selectedItemId)
      .then((item) => {
        this.setState({
          item
        })
      });
  };

  render() {
    const { item } = this.state;
    const view = item ? <ViewItemDetails item={item} /> : <span>Choose a person from list</span>  

    return (
      <div className="item-details card">
        {view}
      </div>
    );
  };
};

const ViewItemDetails = ({ item }) => {
  return (
    <Fragment>
      <img className="item-image"
          src={item.image} alt={item.name} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{item.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{item.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{item.eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
    </Fragment>
  );
};

export default ItemDetails;
