import "./App.css";
import ContextExampleTest from "./ContextExample/ContextExampleTest";
import ThemeContext from "./ContextExample/ThemeContext";
import CounterState from "./CounterState/CounterState";
import FormManagement from "./FormManagement/FormManagement";
import ListRenderingExample from "./ListRenderingExample/ListRenderingExample";
import UseReducerExample from "./UseReducerExample/UseReducerExample";
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
      {/* <FormManagement></FormManagement> */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* <ThemeContext.Provider value="Dark">
      <ContextExampleTest></ContextExampleTest>
     </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
