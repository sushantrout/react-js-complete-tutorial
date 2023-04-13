import React from "react";

function FunctionClick() {
  function clickHanlder() {
    alert("Clcik On The button")
  }
  return (
    <div>
      <button onClick={clickHanlder}>Click Me V1</button>
      <button onClick={() => clickHanlder()}>Click Me V2</button>
    </div>
  );
}

export default FunctionClick;
