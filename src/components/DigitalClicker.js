// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState((pre) => {
      return {
        timesClicked: pre.timesClicked + 1,
      };
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
