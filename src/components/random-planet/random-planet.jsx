import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import RandomPlanetView from './random-planet-view'
import Spinner from '../spinner';
import Errorindicator from '../error-indicator';

import './random-planet.css';

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 5000);
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 2;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <RandomPlanetView planet={planet} /> : null;
    const errorIdnicator = error ? <Errorindicator /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorIdnicator}
      </div>
    );
  };
};

export default RandomPlanet;
