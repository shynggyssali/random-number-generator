import { useState } from "react";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(1);
  const [secondNumber, setSecondNumber] = useState(10);
  const [result, setResult] = useState(7);

  function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  function generate() {
    const newResult = getRandom(firstNumber, secondNumber);
    setResult(newResult);
  }

  function firstInput(e) {
    setFirstNumber(e.target.value);
  }
  function secondInput(e) {
    setSecondNumber(e.target.value);
  }

  return (
    <>
      <div className="container">
        <input
          type="number"
          onChange={(e) => firstInput(e)}
          value={firstNumber}
        />
        <input
          type="number"
          onChange={(e) => secondInput(e)}
          value={secondNumber}
        />
        <button onClick={generate}>GENERATE</button>
        <div className="display">{result}</div>
      </div>
    </>
  );
}
