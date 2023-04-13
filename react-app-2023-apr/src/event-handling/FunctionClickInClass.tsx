import React, { Component } from "react";

export class FunctionClickInClass extends Component {
  clickHanlder() {
    alert("Clcik On The button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHanlder}>Click Me</button>
      </div>
    );
  }
}

export default FunctionClickInClass;
