import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { detailsWithData, withSwapiService } from '../hoc-helpers';

const DetailsWithChildren = (Wrapped) => {
  return (props) => {
      return (
        <Wrapped {...props} >
          <Record field="population" label="Population:" />
          <Record field="rotationPeriod" label="Rotation Period:" />
          <Record field="diameter" label="Diameter:" />
        </Wrapped>
      )
  };
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet
  }
}

const PlanetDetails = withSwapiService(mapMethodToProps)(DetailsWithChildren(detailsWithData(ItemDetails)));

export default PlanetDetails;
