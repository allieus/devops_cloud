import { useState } from "react";

// { type: "PLUS", amount: 1 }
// { type: "MINUS", amount: 1 }
function dispatch(action, prevState) {
  // 순수함수로서 구현이 되어야만 합니다.
  // 같은 값의 인자가 주어지만, 항상 같은 값의 리턴을 해야만 하고
  // 인자 외에 다른 어떤 값, 어떤 통신을 해서도 안 됩니다.
  const { type, amount, color } = action;
  if (type === "PLUS") {
    return {
      ...prevState,
      value: prevState.value + amount,
    };
  } else if (type === "MINUS") {
    return {
      ...prevState,
      value: prevState.value - amount,
    };
  } else if (type === "CHANGE_COLOR") {
    return { ...prevState, color: color };
  }
  // 버그 !!!
  return prevState;
}

function Counter2() {
  // TODO: color와 value
  //   지금의 초기값 : 0
  //   오후의 초기값 : { value: 0, color: "red" }
  const [state, setState] = useState({ value: 0, color: "red" });
  const { value, color } = state;

  return (
    <div>
      <h2>Counter2</h2>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <hr />
      <button
        onClick={() =>
          setState((prevState) =>
            dispatch({ type: "PLUS", amount: 1 }, prevState)
          )
        }
      >
        증가
      </button>
      <button
        onClick={() =>
          setState((prevState) =>
            dispatch({ type: "MINUS", amount: 1 }, prevState)
          )
        }
      >
        감소
      </button>
      <button
        onClick={() =>
          setState((prevState) =>
            dispatch({ type: "CHANGE_COLOR", color: "green" }, prevState)
          )
        }
      >
        Green
      </button>
      <button
        onClick={() =>
          setState((prevState) =>
            dispatch({ type: "CHANGE_COLOR", color: "blue" }, prevState)
          )
        }
      >
        Blue
      </button>
      <button
        onClick={() =>
          setState((prevState) =>
            dispatch({ type: "CHANGE_COLOR", color: "red" }, prevState)
          )
        }
      >
        Red
      </button>
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
  transition: "all 0.4s",
};

export default Counter2;
