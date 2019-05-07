import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { detailsWithData, withSwapiService } from '../hoc-helpers';

const DetailsWithChildren = (Wrapped) => {
  return (props) => {
      return (
        <Wrapped {...props} >
          <Record field="model" label="Model" />
          <Record field="costInCredits" label="Cost" />
        </Wrapped>
      )
  };
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship
  }
}

const StarshipDetails = withSwapiService(mapMethodToProps)(DetailsWithChildren(detailsWithData(ItemDetails)));

export default StarshipDetails;
