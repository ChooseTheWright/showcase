import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor () {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    };
  }
  numberSorter = (numStr) => {
    let numArr = numStr.split(',');
    let evenArr = [];
    let oddArr = [];

    for (var i = 0; i < numArr.length; i++) {
      numArr[i] % 2 === 0 ? evenArr.push(parseInt(numArr[i], 10)): oddArr.push(parseInt(numArr[i], 10));
    }

    this.setState({evenArray: evenArr, oddArray: oddArr, userInput: ''});
  }
  render () {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <input className="inputLine" value={this.state.userInput} onChange={(e) => {this.setState({userInput: e.target.value});}}></input>
        <button className="confirmationButton" onClick={() => {this.numberSorter(this.state.userInput);}}></button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;
