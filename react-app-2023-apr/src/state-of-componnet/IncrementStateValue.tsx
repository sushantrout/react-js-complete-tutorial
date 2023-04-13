import { Component } from "react";

interface MyComponentState {
  count: number;
}

export class IncrementStateValue extends Component<{}, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment1() {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  increment5() {
    for (let i = 0; i < 5; i++) {
        //not working as expected beacuse multiple setstate method called at once
      /* this.setState({
        ...this.state,
        count: this.state.count + 1,
      });
      console.log(this.state.count); */

      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }
  }

  render() {
    return (
      <>
        <div>Counter {this.state.count}</div>
        <button onClick={() => this.increment1()}>Increment 1</button>
        <button onClick={() => this.increment5()}>Increment 5</button>
      </>
    );
  }
}

export default IncrementStateValue;
