import axios from "axios";

const getResults = (query) => {
  return axios.post("/api/search", {
    terms: query
  }).then( response => {
    console.log(response);
    this.setState({
      results: response
    })
  })
};

const getSaved = () => {

};

export { getSaved, getResults }
