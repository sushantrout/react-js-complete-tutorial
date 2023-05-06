import React, { forwardRef } from "react";

const ChildRef = forwardRef((props: any, ref: any) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ChildRef;
