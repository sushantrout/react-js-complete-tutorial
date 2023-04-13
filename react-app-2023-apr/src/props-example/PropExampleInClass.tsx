import React from "react";

interface PropExampleInClassProps {
  name: string;
  optionalParam?:string;
}

class PropExampleInClass extends React.Component<PropExampleInClassProps> {
  render() {
    return <h1>Class Property Example {this.props.name} and optional value is
     {this.props.optionalParam ? this.props.optionalParam : ' NOTHING'}</h1>;
  }
}
export default PropExampleInClass;
