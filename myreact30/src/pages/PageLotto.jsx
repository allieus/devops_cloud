import { useState } from 'react';
import './PageLotto.css';

const range = (size) => [...Array(size).keys()];

function PageLotto() {
  const [numbers, setNumbers] = useState([]);

  const predictNumbers = () => {
    setNumbers(
      range(45)
        .map((number) => number + 1)
        .sort(() => Math.random() - Math.random())
        .slice(0, 7)
        .sort((a, b) => a - b),
    );
  };

  return (
    <div>
      <h2>로또 번호 예지</h2>
      <button onClick={predictNumbers}>예지</button>

      <ul className="numbers">
        {numbers.slice(0, 3).map((number) => (
          <li key={number} className="group1">
            {number}
          </li>
        ))}
        {numbers.slice(3, 5).map((number) => (
          <li key={number} className="group2">
            {number}
          </li>
        ))}
        {numbers.slice(5, 6).map((number) => (
          <li key={number} className="group3">
            {number}
          </li>
        ))}
        {numbers.slice(6).map((number) => (
          <li key={number} className="group4">
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageLotto;
