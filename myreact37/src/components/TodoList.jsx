import { useState } from 'react';

const INITIAL_STATE = [
  { content: '2022년에는 살 빼기' },
  { content: '파이썬 익히기' },
  { content: '리액트 익히기' },
];

function TodoList() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState(INITIAL_STATE);

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  const changedInputText = (e) => {
    setInputText(e.target.value);
  };

  const appendInputText = (e) => {
    console.log('e.key :', e.key);
    if (e.key === 'Enter') {
      // todoList 배열 끝에 inputText를 추가합니다.
      // inputText를 다시 비웁니다.
      console.log('inputText :', inputText);

      // setTodoList 에 함수를 넘기는 것.
      // todoList 상탯값을 직접 변경하는 것은 아닙니다. (배열의 push를 사용 X)

      setTodoList((prevTodoList) => {
        return [...prevTodoList, { content: inputText }];
      });

      setInputText('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      />

      {todoList.map((todo, index) => (
        <div onClick={() => removeTodo(index)}>{todo.content}</div>
      ))}
    </div>
  );
}

export default TodoList;
