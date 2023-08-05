export default function JSXASChild({color, bg}) {
    return (
      <div>
        <h1 style={{
            color,
            background: bg
        }}>Hello World From Child</h1>
      </div>
    );
  }