import { useState } from "react";

function Counter() {
  const [state, setState] = useState({ value: 0, color: "red" });
  const { value, color } = state;

  return (
    <div>
      <h2>Counter</h2>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
    </div>
  );
}

const defaultStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  lineHeight: "100px",
  textAlign: "center",
  display: "inline-block",
  fontSize: "3rem",
  userSelect: "none",
};

export default Counter;
