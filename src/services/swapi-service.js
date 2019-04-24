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

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPersonData);
  };

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPersonData(person)
  };

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanetData);
  };

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanetData(planet);
  };

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  };

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  };

  _transformPlanetData(planet) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = planet.url.match(idRegExp)[1];
    return {
      imageId: id,
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
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}
