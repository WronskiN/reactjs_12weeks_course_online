import React, { Component } from "react";

class ClassTimer extends Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Class timer: {this.state.time}</div>;
  }
}

export default ClassTimer;
