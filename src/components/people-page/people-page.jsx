import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-service';

class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  render() {

    if(this.state.hasError) return <ErrorIndicator />

    return this.props.children;
  };
};

class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };
  
  render() {
    const itemList = <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople} >

                        {({name, birthYear}) => (<span>{name}<span>Birth Year: {birthYear}</span></span>)}
                      </ItemList>

    const itemDetails = <ItemDetails selectedItemId={this.state.selectedItem} />

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  };
};

export default PeoplePage;
