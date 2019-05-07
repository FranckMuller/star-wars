import React, { Component } from 'react';
import { StarshipsList, StarshipDetails } from '../sw-components';
import Row from '../row';

class StarshipsPage extends Component {

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
        left={<StarshipsList onItemSelected={this.onItemSelected} />} 
        right={<StarshipDetails itemId={selectedItemId} />}
      />
    );
  };
};

export default StarshipsPage;
