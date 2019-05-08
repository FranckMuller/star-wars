import React from 'react';
import { PeopleList, PersonDetails } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ history, match }) => {
    return (
      <Row 
        left={<PeopleList onItemSelected={(id) => {
          history.push(id);
        }} />} 
        right={<PersonDetails itemId={match.params.id} />}
      />
    );
};

export default PeoplePage;
