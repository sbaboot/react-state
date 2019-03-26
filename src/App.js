import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: props.work
    };
  };

  handleClick = () => {
    this.setState({ work: !this.state.work });
  };

  render() {
    const logoWork = this.state.work ? 'Working' : 'Not-Working';
    const buttonWork = this.state.work ? 'Homer is working' : "Homer doesn't work"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoWork} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button
            onClick={this.handleClick}
          >
            {buttonWork}
          </button>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;