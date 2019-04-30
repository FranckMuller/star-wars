export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPersonData);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPersonData(person)
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanetData);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanetData(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarshipData);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarshipData(starship);
  };

  _transformPlanetData = (planet) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = planet.url.match(idRegExp)[1];
    return {
      id,
      image: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformPersonData(person) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = person.url.match(idRegExp)[1];
    return {
      id,
      image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  _transformStarshipData(starship) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = starship.url.match(idRegExp)[1];
    return {
      id,
      image: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    };
  };
};
