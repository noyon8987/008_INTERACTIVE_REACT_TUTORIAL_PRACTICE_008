import React, { useState } from "react";

export default function Use_State() {
  const [count, setCount] = useState(10);
  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase by 1</button>
      <button onClick={handleDecrease}>Decrease by 1</button>
    </div>
  );
}
