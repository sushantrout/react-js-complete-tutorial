import React, { PureComponent } from "react";
import { NumberContext } from "./UseContextExample";

export class UseContextChild2 extends PureComponent {
  render() {
    return (
      <NumberContext.Consumer>
        {(value) => (
          <>
            <h1>{value.name}</h1>
          </>
        )}
      </NumberContext.Consumer>
    );
  }
}

export default UseContextChild2;
