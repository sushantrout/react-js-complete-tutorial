import React, { PureComponent, useRef } from "react";
import ChildRef from "./ChildRef";

class UseRefExample extends PureComponent {
  inputRef = useRef(null);
  render() {
    return (
      <div>
        {/* <ChildRef ref={this.inputRef} /> */}
        <button onClick={() =>{
            this.onClickHandler()
        }}></button>
      </div>
    );
  }

  onClickHandler() {
    console.log(this.inputRef.current)
  }
}

export default UseRefExample;
