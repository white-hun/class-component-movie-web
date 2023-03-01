import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = () => {
    const movies = axios.get("https://yts-proxy.now.sh/list_movie.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}
