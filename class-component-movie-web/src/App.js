import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // async -  axios가 끝날 때까지 기다린다
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movie.json");
    this.setState({ movies: movies });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}
