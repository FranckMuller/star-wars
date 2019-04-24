import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';

import './person-details.css';

class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if(prevProps.selectedItemId !== this.props.selectedItemId) {
      this.updatePerson();
    }
  };

  updatePerson() {
    const { selectedItemId } = this.props;
    if(!selectedItemId) return;
    this.swapiService.getPerson(selectedItemId)
      .then((person) => {
        this.setState({
          person
        })
      });
  };

  render() {
    const { person } = this.state;
    const view = person ? <ViewItemDetails person={person} /> : <span>Choose a person from list</span>  

    return (
      <div className="person-details card">
        {view}
      </div>
    );
  };
};

const ViewItemDetails = ({ person }) => {
  return (
    <Fragment>
      <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt={person.name} />

        <div className="card-body">
          <h4>{person.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{person.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{person.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{person.eyeColor}</span>
            </li>
          </ul>
        </div>
    </Fragment>
  );
};

export default PersonDetails;
