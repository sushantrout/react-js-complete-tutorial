import { useRef, useEffect } from "react";

function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}
export default UseRefExample;