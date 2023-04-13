import React, { Component } from "react";

interface MyComponentState {
  message: string;
}

export class StateClassExample extends Component<{}, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "Sushant",
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              ...this.state,
              message: this.state.message + " " + this.state.message,
            })
          }
        >
          Click for double
        </button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default StateClassExample;
