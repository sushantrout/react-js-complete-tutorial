import { useState } from "react";

const CounterState = () => {
    const [counter, setCounter] = useState(0);
  const increment = () => { //it will update once
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    console.log(counter);
  };

  const incrementC = () => { //it will update the value ut console value will show the prev
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
   
    console.log(counter);
  };
  return <>
  <h1>{counter}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={incrementC}>Increment Callback</button>
  </>
};

export default CounterState;
