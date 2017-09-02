import React, { Component } from 'react';

class Palindrome extends Component {
  constructor () {
    super ();
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  palindromeChk = () => {
    let origStr = this.state.userInput.replace(/\s|,|\.|_|-|[{()}]/g, "").toLowerCase();
    let reverseStr = origStr.split("").reverse().join("");
    this.setState({palindrome: origStr === reverseStr ? true: false});
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrone</h4>
        <input className="inputLine" onChange={(e) => {this.setState({userInput: e.target.value});}}></input>
        <button className="confirmationButton" onClick={() => {this.palindromeChk();}}></button>
        <span className="resultsBox">Palindrone: {JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome;
