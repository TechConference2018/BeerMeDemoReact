import React from "react";

import states from "../assets/states.json";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      state: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
    this.clearParams = this.clearParams.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name, state} = this.state;
    this.props.handleFormSubmit(name, state);
  }

  handleParamChange(event) {
    event.preventDefault && event.preventDefault();
    const {value, name} = event.target;
    // Asynchronous set state
    this.setState({[name]: value});
  }

  clearParams(event) {
    event.preventDefault();
    this.handleParamChange({target: {value:'', name:'name'}});
    this.handleParamChange({target: {value:'', name:'state'}});
  }

  render() {
    console.log("SearchForm render");
    return (
      <div id="search">
        <form id="searchForm">
          <input
            name="name" className="form-control"
            value={this.state.name}
            onChange={this.handleParamChange}
            type="text" placeholder={"Name..."}
          />

          <select
            name="state" className="form-control"
            value={this.state.state}
            onChange={this.handleParamChange}
          >
            <option value="">{"State..."}</option>
            {states.map((state, idx) => {
              const key = `${state.name}_${idx}`;
              return (
                <option value={state.name} key={key}>
                  {state.name}
                </option>
              );
            })}
          </select>

          <button type="submit" onClick={this.handleSubmit} className="btn">Search</button>
          <button type="button" onClick={this.clearParams} className="btn">X</button>
        </form>
      </div>
    );
  }
}
