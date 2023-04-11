import React, { Component } from "react";
import RegularCompnent from "./regular-component";
import MyPureComponent from "./pure-component";

export class ParentCompnnet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Biswas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Biswas",
      });
    }, 2000);
  }

  render() {
    console.log('Parent Component')
    return (
      <div>
        <h1>Parent Compnnet {this.state.name}</h1>
        <RegularCompnent name={this.state.name}></RegularCompnent>
        <MyPureComponent name={this.state.name}></MyPureComponent>
      </div>
    );
  }
}

export default ParentCompnnet;
