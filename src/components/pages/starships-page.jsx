import React from 'react';
import { StarshipsList, StarshipDetails } from '../sw-components';
import Row from '../row';

const StarshipsPage = ({ history, match }) => {
    return (
      // <StarshipsList 
      //   onItemSelected={(id) => {
      //     history.push(id);
      // }} />

       <Row 
        left={<StarshipsList onItemSelected={(id) => {
          history.push(id);
        }} />} 
        right={<StarshipDetails itemId={match.params.id} />}
      />
    );
};

export default StarshipsPage;
