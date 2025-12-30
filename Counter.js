// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [time, setTime] = useState(0)

  function increment() {
    setTime((prev) => prev + 1)
  }

  function decrement() {
    setTime((prev) => prev - 1)
  }

  function reset() {
    setTime(0)
  }
  return (
    <div>
      <h2>Counter: {time} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;