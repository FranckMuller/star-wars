import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

class App extends Component {

  state = {
    selectedItem: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItemId={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  };
};

export default App;
