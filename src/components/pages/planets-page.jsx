import React from 'react';
import { PlanetsList, PlanetDetails } from '../sw-components';
import Row from '../row';

const PlanetsPage = ({ history, match }) => {
    return (
      <Row 
        left={<PlanetsList onItemSelected={(id) => {
          history.push(id);
        }} />} 
        right={<PlanetDetails itemId={match.params.id} />}
      />
    );
  };

export default PlanetsPage;
