import React, { Component } from 'react';

class FilterObject extends Component {
  constructor () {
    super ();
    this.state = {
      unfilteredArray: [{name: 'Kolt', age: 27, title: 'GIS Analyst'},
      {name: 'Sharee', favAnimal: 'All the little Critters', nickname: 'Bug'},
      {name: 'Ryan', age: 24, favAnimal: 'Lamas'}],
      userInput: '',
      filteredArray: []
    };
  }

  filterArr = () => {
    let filteredArr = this.state.unfilteredArray.filter((item) => {
      return item.hasOwnProperty(this.state.userInput);
    });

    this.setState({filteredArray: filteredArr, userInput: ''});
  }

  render () {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" value={this.state.userInput} onChange={(e) => {this.setState({userInput: e.target.value});}}></input>
        <button className="confirmationButton" onClick={() => {this.filterArr();}}></button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject;
