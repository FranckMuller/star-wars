import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { detailsWithData, withSwapiService } from '../hoc-helpers';

const DetailsWithChildren = (Wrapped) => {
  return (props) => {
      return (
        <Wrapped {...props} >
          <Record field="gender" label="Gender:" />
          <Record field="birthYear" label="Birth Year:" />
          <Record field="eyeColor" label="Eye Color:" />
        </Wrapped>
      );
  };
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson
  };
};

const PersonDetails = withSwapiService(mapMethodToProps)(DetailsWithChildren(detailsWithData(ItemDetails)));

export default PersonDetails;
