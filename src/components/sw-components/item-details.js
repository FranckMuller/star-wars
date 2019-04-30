import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import { detailsWithData } from '../hoc-helpers';

const swapiService = new SwapiService();

const {
  getPerson
} = swapiService;

const PersonDetails = detailsWithData(ItemDetails, getPerson);

export {
  PersonDetails
};
