/* eslint-disable react/prop-types */
import React from "react";

function CounterButton({ children, handleClick }) {
  console.log(`render button ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(CounterButton);
