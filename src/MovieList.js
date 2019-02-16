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
  loadData = async () => {
    const datas = await axios.get("/movies");
    // console.log(data.data.movies);
    /* datas.then(data => {
      console.log("movies", datas.data.movies);
      this.setState({
        movieList: data.data.movies
      });
      //  console.log(this.state.movieList);
    });ß*/
    this.setState({
      movieList: datas.data.movies
    });
  };
  componentDidMount() {
    /* axios.get("/movies").then(
      function(response) {
        this.setState({
          movieList: response.data.movies
        });
      }.bind(this)
    ); */
    this.loadData();
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
