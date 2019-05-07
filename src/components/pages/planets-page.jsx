import React, { Component } from 'react';
import { PlanetsList, PlanetDetails } from '../sw-components';
import Row from '../row';

class PlanetsPage extends Component {

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
        left={<PlanetsList onItemSelected={this.onItemSelected} />} 
        right={<PlanetDetails itemId={selectedItemId} />}
      />
    );
  };
};

export default PlanetsPage;
