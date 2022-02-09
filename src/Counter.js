import React, { useState } from "react";

const Counter = () => {
  const [cnt, setCnt] = useState(0);

  const onIncrease = () => {
    setCnt((prev) => prev + 1);
  };
  const onDecrease = () => {
    setCnt((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
