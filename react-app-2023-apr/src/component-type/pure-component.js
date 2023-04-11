import React, { PureComponent } from 'react'

export class MyPureComponent extends PureComponent {
  render() {
    console.log('Pure Component')
    return (
      <div>
        <h1>Pure Componnet {this.props.name}</h1>
      </div>
    )
  }
}

export default MyPureComponent;
