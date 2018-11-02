import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './SearchForm';
import BreweryList from './BreweryList';

const baseURL = 'https://api.openbrewerydb.org/breweries';

export default class BeerMeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    };
    this.getBreweries = this.getBreweries.bind(this);
    this.getBreweries();
  }

  getBreweries(name="", state="") {
    const url = `${baseURL}?by_name=${name}&by_state=${state}`;
    this.props.toggleLoading();
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("got breweries", data);
        this.props.toggleLoading();
        this.setState({breweries: data});
      });
  }

  render() {
    console.log("BeerMeApp render");
    return (
      <div>
        <SearchForm handleFormSubmit={this.getBreweries} />
        <BreweryList breweries={this.state.breweries} />
      </div>
    );
  }
};
