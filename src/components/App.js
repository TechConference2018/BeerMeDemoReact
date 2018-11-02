import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import BeerMeApp from './BeerMeApp';
import logo from '../assets/beer.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  toggleLoading() {
    const newLoad = !this.state.isLoading;
    this.setState({isLoading: newLoad});
  }

  render() {
    console.log("App render");
    return (
      <div>
        <Header title="Beer Me America 🇺🇸" logo={logo} isLoading={this.state.isLoading} />
        <BeerMeApp toggleLoading={this.toggleLoading}/>
      </div>
    );
  }
};
