import React, { Component } from "react";
import AgeCalc from "./AgeCalc";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      dob: "",
      showAge: false
    };
  }

  changeBirthday() {
    this.setState({
      dob: this.state.newDate,
      showAge: true
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <h2>Input your birthday!!!</h2>
          <input
            type="date"
            onChange={e => this.setState({ newDate: e.target.value })}
          />
          <button type="button" onClick={() => this.changeBirthday()}>
            Submit
          </button>
          {this.state.showAge ? <AgeCalc date={this.state.dob} /> : <div />}
        </form>
      </div>
    );
  }
}

export default App;
