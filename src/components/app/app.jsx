import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { StarshipDetails } from '../sw-components';
import { SwapiServiceProvider }  from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import { 
  PeoplePage,
  PlanetsPage, 
  StarshipsPage,
  LoginPage,
  BonusPage
} from '../pages';

import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    isLogged: false
  }

  onLoggedIn = () => {
    this.setState({
      isLogged: true
    });
  };

  render() {
    const { isLogged } = this.state;

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
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} exact />
            <Route 
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails singlePage itemId={id} />
              }} />
              <Route 
                path="/login" 
                render={() => {
                  return <LoginPage isLogged={isLogged} onLoggedIn={this.onLoggedIn} />
                }} />
              <Route 
                path="/bonus" 
                render={() => {
                  return <BonusPage isLogged={isLogged} />
                }}
              />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  };
};

export default App;
