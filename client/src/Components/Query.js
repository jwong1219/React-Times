import React, { Component } from "react";
import Input from "./Inputs"


class Query extends Component {
  
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Search</h4>
        </div>
        <div className="panel-body">
          <form>
            <Input 
              name="topic"
              placeholder="Search Term"
              value={this.props.inputTopic}
              onChange={this.props.handleInputChange}
            />
            <Input 
              name="start"
              placeholder="Start Year"
              value={this.props.inputStart}
              onChange={this.props.handleInputChange}
            />
            <Input 
              name="end"
              placeholder="End Year"
              value={this.props.inputEnd}
              onChange={this.props.handleInputChange}
            />
            <button type="Submit" className="btn btn-lg btn-danger pull-right" onClick={this.props.getResults}>Submit</button>
          </form>
        </div>
      </div>
    )
  }  
}

export default Query;