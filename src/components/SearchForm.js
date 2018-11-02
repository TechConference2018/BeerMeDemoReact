import React from 'react';

import states from "../assets/states.json";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {}

  handleParamChange(event) {}

  clearParams(event) {}

  render() {
    console.log("SearchForm render");
    return (
      <div>
        <h2>SearchForm.js</h2>
      </div>
    );
  }
}
