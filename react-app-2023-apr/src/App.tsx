import { Component, ReactNode } from 'react';
import './App.css';
import ParentRef from './hooks-in-react/imparative-handel/Parent';


class App extends Component {
  render(): ReactNode {
    return (
      // <BrowserRouter>
      <div className="App" style={{
        background: 'green',
        border: '10px solid red'
      }}>
        {/* <UseRefExampleMaster></UseRefExampleMaster> */}
        {/* <ParentCompnnet></ParentCompnnet> */}
        {/* <UseRefExample></UseRefExample> */}
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
        {/* <UseContextExample></UseContextExample> */}
        {/* <RoutingExample/>
        <RoutingSecondApproach/> */}
        <ParentRef></ParentRef>
      </div>
        // </BrowserRouter>
    );
  }
  
}

export default App;
