import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // async - 함수를 기다린다 axios가 끝날 때까지
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movie.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}
