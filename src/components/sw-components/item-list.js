import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const withChildFunction = (Wrapped, func) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {func}
      </Wrapped>
    );
  };
};

const ListWithChildren = withChildFunction(ItemList, (i) => i.name)

const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetsList = withData(ListWithChildren, getAllPlanets);
const StarshipsList = withData(ListWithChildren, getAllStarships);

export {
  PersonList,
  PlanetsList,
  StarshipsList
};
