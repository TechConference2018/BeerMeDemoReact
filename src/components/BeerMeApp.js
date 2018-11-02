import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './SearchForm';
import BreweryList from './BreweryList';

const baseURL = 'https://api.openbrewerydb.org/breweries';

export default class BeerMeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBreweries() {}

  render() {
    console.log("BeerMeApp render");
    return (
      <div>
        <h2>BeerMeApp.js</h2>
      </div>
    );
  }
};
