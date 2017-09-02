import React, { Component } from 'react';

class Sum extends Component {
  constructor () {
    super ();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  sum = () => {
    let sum = parseInt(this.state.number1, 10) + parseInt(this.state.number2);
    this.setState({sum: sum});
  }

  render () {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" type="number" onChange={(e) => {this.setState({number1: e.target.value});}}></input>
        <input className="inputLine" type="number" onChange={(e) => {this.setState({number2: e.target.value});}}></input>
        <button className="confirmationButton" onClick={() => {this.sum();}}></button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;
