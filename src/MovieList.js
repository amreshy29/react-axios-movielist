import React from "react";
import axios from "axios";
import mockdata from "./mockdata.json";
import MovieTile from "./MovieTile";

var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);
mock.onGet("/movies").reply(200, {
  movies: mockdata
});
class MovieList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movieList: []
    };
  }
  componentDidMount() {
    /* axios.get("/movies").then(
      function(response) {
        this.setState({
          movieList: response.data.movies
        });
      }.bind(this)
    ); */
    axios.get("/movies").then(response => {
      this.setState({
        movieList: response.data.movies
      });
      //  console.log(this.state.movieList);
    });
  }
  render() {
    return (
      <div>
        <MovieTile movieTile={this.state.movieList} />
      </div>
    );
  }
}

export default MovieList;
