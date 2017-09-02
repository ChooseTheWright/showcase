import React, { Component } from 'react';

class FilterString extends Component {
  constructor () {
    super ();
    this.state = {
      unfilteredArray: ['taco cat', 'foo', 'bar', 'foo bar', 'coconut', 'filthy'],
      userInput: '',
      filteredArray: []
    }
  }

  filterArr = () => {
    if (this.state.userInput !== '') {
      let filteredArr = this.state.unfilteredArray.filter((item) => {
        return item.includes(this.state.userInput);
      });

      this.setState({filteredArray: filteredArr, userInput: ''});
    } else {
      
      this.setState({filteredArray: []});
    }
  }
  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Random Strings: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" value={this.state.userInput} onChange={(e) => {this.setState({userInput: e.target.value});}}></input>
        <button className="confirmationButton" onClick={() => {this.filterArr();}}></button>
        <span className="resultsBox filterStringRB">Filtered Random Strings: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString;
