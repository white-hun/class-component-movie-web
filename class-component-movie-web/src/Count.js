import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
