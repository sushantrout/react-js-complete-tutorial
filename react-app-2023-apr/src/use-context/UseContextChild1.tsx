import React, { useContext } from "react";
import UseContextChild2 from "./UseContextChild2";
import { NumberContext } from "./UseContextExample";

const UseContextChild1 = () => {
  let context = useContext(NumberContext);
  return (
    <div>
      <h1>UseContextChild1 {context.name}</h1>
      <UseContextChild2></UseContextChild2>
      <button onClick={() => {
        context.setNameValue(context.name + " " +context.name)
      }}>Change Value</button>
    </div>
  );
};

export default UseContextChild1;
