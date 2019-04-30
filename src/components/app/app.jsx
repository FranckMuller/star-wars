import React, { Component } from 'react';

import Header from '../header';

import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

import {
  PersonList,
  PlanetsList,
  StarshipsList
} from '../sw-components';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
        <div className="stardb-app">
          <Header />

          <ItemDetails 
            itemId={11} 
            getData={this.swapiService.getPerson}>

            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />

          </ItemDetails>

          {/* <PersonList>
            {(i) => i.name}
          </PersonList>

          <StarshipsList>
            {(i) => i.name}
          </StarshipsList>

          <PlanetsList>
            {(i) => i.name}
          </PlanetsList> */}

        </div>
    );
  }
}
