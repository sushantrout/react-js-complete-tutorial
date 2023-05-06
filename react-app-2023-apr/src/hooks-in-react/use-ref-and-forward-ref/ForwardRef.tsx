import { ForwardedRef, forwardRef, useRef } from "react";

const ChildComponent = forwardRef((props, ref : ForwardedRef<HTMLInputElement>) => {
  return <input ref={ref} />;
});

function ForwardRefExampleParent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default ForwardRefExampleParent;