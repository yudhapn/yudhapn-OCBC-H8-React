import { Component } from "react";

export default class ClockClassBased extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Realtime Clock Component Class-Based</h1>
          <hr />
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
      </>
    );
  }
}
