import React, { Component } from 'react';
import Nav from "./Components/Nav";
import Query from "./Components/Query";
import ResultsContainer from "./Components/Results";
import { getSaved, getResults } from "./utilities/API.js";


class App extends Component {
  
  state={
    results: [],
    topic: "",
    start: "",
    end: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  search = (event) => {
    event.preventDefault();
    console.log(`Search!`);
    let query = {
      topic: this.state.topic,
      startDate: this.state.start,
      endDate: this.state.end
    }
    getResults(query);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Query
          getResults={this.search}
          inputTopic={this.state.topic}
          inputStart={this.state.start} 
          inputEnd={this.state.end}
          handleInputChange={this.handleInputChange}
        />
        <ResultsContainer results={this.state.results} />

      </div>
    );
  }
}

export default App;



// <Results results=this.state.results />