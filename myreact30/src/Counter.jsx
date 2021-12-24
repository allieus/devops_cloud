import { useState } from 'react';

function Counter({ initial }) {
  // 속성값을 초기값으로 참조하여 상탯값 value를 생성
  const [value, setValue] = useState(initial);

  const handleClick = () => {
    setValue(value + 1); // 완벽한 코드는 X
  };

  const handleContextMenu = (e) => {
    // context menu의 기본동작을 막습니다.
    e.preventDefault();
    setValue(value - 1);
  };

  return (
    <div
      style={{ userSelect: 'none', cursor: 'pointer' }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {value}
    </div>
  );
}

export default Counter;
