import React, { Component } from 'react';
import { PeopleList, PersonDetails } from '../sw-components';
import Row from '../row';

class PeoplePage extends Component {

  state = {
    selectedItemId: null
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id
    })
  }
  
  render() {
    const { selectedItemId } = this.state;
    return (
      <Row 
        left={<PeopleList onItemSelected={this.onItemSelected} />} 
        right={<PersonDetails itemId={selectedItemId} />}
      />
    );
  };
};

export default PeoplePage;
