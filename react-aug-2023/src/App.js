import "./App.css";
import CounterState from "./CounterState/CounterState";
import FormManagement from "./FormManagement/FormManagement";
import ListRenderingExample from "./ListRenderingExample/ListRenderingExample";
import ConditionalRenderingParent from "./conditional-rendering/ConditionalRenderingParent";
import employees from "./employees";
import JSXASAsPropsTest from "./jsx-as-props/JSXASAsPropsTest";
import JSXASChild from "./jsx-as-props/JSXASChild";

function App() {
  const data = employees;
  return (
    <div className="App">
      {/* <JSXASAsPropsTest>
        <JSXASChild></JSXASChild>
      </JSXASAsPropsTest> */}
      {/* <ConditionalRenderingParent></ConditionalRenderingParent> */}
     {/*  <ListRenderingExample items={data} /> */}
     {/* <CounterState></CounterState> */}
     <FormManagement></FormManagement>
    </div>
  );
}

export default App;
