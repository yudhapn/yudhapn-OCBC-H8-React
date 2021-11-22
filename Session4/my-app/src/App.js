import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import PropTypes from 'prop-types'

class HeroName extends Component {
  render() {
    return (<h3>Hallo hero {this.props.name}</h3>)
  }
}

HeroName.props = {
  name: PropTypes.string
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      title: "Session 19 - React JS",
      name: "Borax"
    }
  }
  
  changeTitle() {
    this.setState({
      ...this.state,
      title: "Final Project - React JS"
    })
  }
  // changeTitle = () => {
  //   this.setState({
  //     ...this.state,
  //     title: "Final Project - React JS"
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title} by {this.state.name}</h2>
          <HeroName name={this.state.name}/>
          <p>
            Hello Borax!
          </p>
          <button
            className="App-link"
            onClick={this.changeTitle.bind(this)}
          >
            Change Title
          </button>
        </header>
      </div>
    );
  }
}

export default App;
