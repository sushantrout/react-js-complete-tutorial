export default function ConditionalRenderingChild(props) {
  const condition = props.condition;

  if (condition) {
    return <p>Render when true</p>;
  } else {
    return <p>Render when false</p>;
  }
}
