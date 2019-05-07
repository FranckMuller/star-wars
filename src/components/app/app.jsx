import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider }  from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    );
  };
};
