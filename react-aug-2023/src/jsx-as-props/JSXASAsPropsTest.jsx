import JSXASChild from "./JSXASChild";
import JSXASParent from "./JSXASParent";

export default function JSXASAsPropsTest() {
  let styleForuse = {
    color: "red",
    bg: "black",
  };
  return (
    <>
      <JSXASParent>
        <JSXASChild color={"red"} bg={"black"}></JSXASChild>
        <JSXASChild color={"white"} bg={"black"}></JSXASChild>
        <JSXASChild {...styleForuse}></JSXASChild>
      </JSXASParent>
    </>
  );
}
