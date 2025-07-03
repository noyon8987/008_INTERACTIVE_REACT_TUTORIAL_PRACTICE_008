import React from "react";

function CounterTitle() {
  console.log("Counter is title");

  return (
    <div>
      <h1>Counter Application</h1>
    </div>
  );
}

export default React.memo(CounterTitle);