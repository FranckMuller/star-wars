import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider }  from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Route 
              path="/"
              render={() => <h2 className="welcome-message text-center">Welcome to Star Wars Application</h2>}
              exact />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  };
};

export default App;
