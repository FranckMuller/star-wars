import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetsList = withData(ItemList, getAllPlanets);
const StarshipsList = withData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetsList,
  StarshipsList
};
