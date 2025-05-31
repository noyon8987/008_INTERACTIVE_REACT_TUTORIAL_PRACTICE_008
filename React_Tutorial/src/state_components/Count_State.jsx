import { useState } from "react";
import "../style.css";

export default function Count_State() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    //! This is Call Batch Updated!
    // setCount(count + 1);

    //? This is Call Updater Function!
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    //! This is Call Batch Updated!
    // setCount(count - 1);

    //? This is Call Updater Function!
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Count State Randering</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
