import './App.css';
import FunctionClick from './event-handling/FunctionClick';
import FunctionClickInClass from './event-handling/FunctionClickInClass';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <GreetES/>
      <CGreet></CGreet> */}
      {/* <PropExample name="1 as Prop"></PropExample>
      <PropExample name="2 as prop"></PropExample>

      <PropExampleInClass name="sssss" optionalParam="Its optional"></PropExampleInClass>
      <PropExampleInClass name="Test two"></PropExampleInClass> */}

      {/* <StateClassExample></StateClassExample>
      <IncrementStateValue></IncrementStateValue> */}

      <FunctionClick></FunctionClick>
      <FunctionClickInClass></FunctionClickInClass>
    </div>
  );
}

export default App;
