import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import BeerMeApp from './BeerMeApp';
import logo from '../assets/beer.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLoading() {}

  render() {
    console.log("App render");
    return (
      <div>
        <h2>App.js</h2>
      </div>
    );
  }
};
