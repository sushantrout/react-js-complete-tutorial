import { Component, ReactNode } from 'react';
import './App.css';
import UseContextExample from './use-context/UseContextExample';

class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <h1>Main APP</h1>
        {/* <Greet/>
        <GreetES/>
        <CGreet></CGreet> */}
        {/* <PropExample name="1 as Prop"></PropExample>
        <PropExample name="2 as prop"></PropExample>
  
        <PropExampleInClass name="sssss" optionalParam="Its optional"></PropExampleInClass>
        <PropExampleInClass name="Test two"></PropExampleInClass> */}
  
        {/* <StateClassExample></StateClassExample>
        <IncrementStateValue></IncrementStateValue> */}
  
        {/* <FunctionClick></FunctionClick>
        <FunctionClickInClass></FunctionClickInClass> */}
        <UseContextExample></UseContextExample>
      </div>
    );
  }
  
}

export default App;
