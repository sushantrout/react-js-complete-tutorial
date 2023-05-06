import React, { useEffect, useRef } from "react";
import Child from "./Child";

const ForwardedChild = React.forwardRef(Child);
function ParentRef() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);
  
  return <div>
    <ForwardedChild ref={ref} type="text" placeholder="Enter your name"/>
  </div>;
}

export default ParentRef;
