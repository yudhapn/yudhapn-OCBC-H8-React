import "./App.css";
import { Component } from "react";
import HaluClassBased from "./HaluClassBased";
import HaluFunctionBased from "./HaluFunctionBased";
import ClockClassBased from "./ClockClassBased";
import ClockFunctionBased from "./ClockFunctionBased";

class App extends Component {
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
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <>
        {/* <h3>Fetch data in component class-based inside componentDidMount</h3>
        <HaluClassBased />
        <br />
        <h3>Fetch data in component function-based inside useEffect</h3>
        <HaluFunctionBased /> */}
        <br />
        <ClockClassBased />
        <br />
        <ClockFunctionBased />
      </>
    );
  }
}

export default App;
