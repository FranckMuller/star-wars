import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction, compose } from '../hoc-helpers';

const renderName = (i) => i.name;

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PeopleList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetsList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipsList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export {
  PeopleList,
  PlanetsList,
  StarshipsList
};
