import React, { useState } from "react";
import UseContextChild1 from "./UseContextChild1";

export class MyContext {
  name !: string;
  setNameValue !: any
}
export const NumberContext = React.createContext(new MyContext());
const UseContextExample = () => {
  let [name, setNameValue] = useState("Aswani");
  return (
    <NumberContext.Provider value={{ name, setNameValue }}>
      <div>
        <h1>UseContextExample {name}</h1>
        <UseContextChild1></UseContextChild1>
      </div>
    </NumberContext.Provider>
  );
};

export default UseContextExample;
