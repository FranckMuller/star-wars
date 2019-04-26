import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Row from '../row';

import SwapiService from '../../services/swapi-service';

import './app.css';
import ItemDetails from '../item-details';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: null,
    hasError: false
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  render() {

    const personDetails = <ItemDetails 
                            getData={this.swapiService.getPerson} 
                            selectedItemId={10} >

                            {/* {(i) => (i.name, i.birthYear, i.eyeColor)} */}

                          </ItemDetails>
    const planetDetails = <ItemDetails
                            getData={this.swapiService.getPlanet}
                            selectedItemId={2}>
                          </ItemDetails>
    
    if(this.state.hasError) {
      return <ErrorIndicator />;
    };
    
    return (
      <div>
        <Header />
        {/* <RandomPlanet />
        <ErrorButton />

        <PeoplePage />
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets} >

              {(item) => (<span>{item.name} <span>Population: {item.population}</span></span>)}  
              
            </ItemList>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItemId={this.state.selectedItem} />
          </div>
        </div> */}

        <Row left={personDetails} right={planetDetails} />
      </div>
    );
  };
};

export default App;
