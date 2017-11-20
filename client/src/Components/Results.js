import React, { Component } from "react";
import Article from "./Article.js";

class ResultsContainer extends Component {
  
  pickRender = () => {
    if(this.props.results.length === 0) {
      console.log(`no results`);
      return (
        <div className="panel-body text-center">
          <p>Enter search terms to begin!</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="panel-heading">
            <h4>Results</h4>
          </div>
          <div className="panel-body">
            {this.props.results.map(article => {
              <Article article />
            })}
          </div>
        </div>

      )
    }
  }

  render() {
    return(
      <div className="panel panel-default">
          {this.pickRender()}
      </div>
    );
  }
}

export default ResultsContainer;