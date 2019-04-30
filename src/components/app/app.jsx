import React, { Component } from 'react';

import Header from '../header';

import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

import {
  PersonDetails,
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

          <PersonDetails 
            itemId={11} >

            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />

          </PersonDetails>

          <PersonList />
          <StarshipsList />
          <PlanetsList />

        </div>
    );
  }
}
