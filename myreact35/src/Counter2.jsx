import { useState } from "react";

// { type: "PLUS", amount: 1 }
// { type: "MINUS", amount: 1 }
function reducer(action, prevState) {
  // 순수함수로서 구현이 되어야만 합니다.
  // 같은 값의 인자가 주어지만, 항상 같은 값의 리턴을 해야만 하고
  // 인자 외에 다른 어떤 값, 어떤 통신을 해서도 안 됩니다.
  const { type, amount } = action;
  if (type === "PLUS") {
    return prevState + amount;
  } else if (type === "MINUS") {
    return prevState - amount;
  }
  // 버그 !!!
  return prevState;
}

// function reducer_color(action, prevState) {
//   const newState = "...";
//   return newState;
// }

function Counter2() {
  // TODO: color와 value
  //   지금의 초기값 : 0
  //   오후의 초기값 : { value: 0, color: "red" }
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("red");

  const handlePlus = () => {
    const action = { type: "PLUS", amount: 1 };
    setValue((prevValue) => {
      // reducer 함수를 호출하여, 새로운 상탯값을 계산해냅니다.
      return reducer(action, prevValue);
    });
  };

  const handleMinus = () => {
    const action = { type: "MINUS", amount: 1 };
    setValue((prevValue) => {
      return reducer(action, prevValue);
    });
  };

  return (
    <div>
      <h2>Counter2</h2>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <hr />
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>
      <button>Green</button>
      <button>Blue</button>
      <button>Red</button>
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

export default Counter2;
