import React from 'react'
import UseRefExample from './UseRefEample'
import ForwardRefExampleParent from './ForwardRef'

export default function UseRefExampleMaster() {
  return (
    <div>
      <UseRefExample></UseRefExample>
      <ForwardRefExampleParent></ForwardRefExampleParent>
    </div>
  )
}
