// Lamp.js
import React, { Component } from 'react';
import logo from "./logo.svg";

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: props.work
    };
  } ;

handleClick = () => {
  this.setState({ work: !this.state.work });
};
render() {
  const logo = this.state.work ? 'on' : 'off';
  return (
    <div className="Lamp">
      <button
        onClick={this.handleClick}
        className={logo}
      >
        {logo.toUpperCase()}
      </button>
      <figure className={logo} />
    </div>
  );
}
}

export default Lamp;