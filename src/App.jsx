import { useState } from "react";

function App() {
  return <Step />;
}

function Step() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const date = new Date("August 22 2023");
  date.setDate(date.getDate() + count);
  // const date = new Date("August 22 2023");
  // date.setDate(date.getDate() + count);
  // date.setDate();
  // console.log(date);

  function countBackward() {
    if (step > 0) setStep((s) => s - 1);
  }
  function countForward() {
    setStep((s) => s + 1);
  }
  function setBackward() {
    setCount((s) => s - step);
  }
  function setForward() {
    setCount((s) => s + step);
  }
  return (
    <div>
      <p style={{ textAlign: "center", display: "flex" }}>
        <button onClick={countBackward}>-</button>
        <h4>Step:{step}</h4>
        <button onClick={countForward}>+</button>
      </p>
      <p style={{ textAlign: "center", display: "flex" }}>
        <button onClick={setBackward}>-</button>
        <h4>Count:{count}</h4>
        <button onClick={setForward}>+</button>
      </p>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0 
            ? `${count} day from today is `
            : // 
              `${Math.abs(count)}day ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
