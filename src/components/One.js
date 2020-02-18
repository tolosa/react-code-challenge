import React, { useState } from "react";

const One = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 1</h2>
      <p>Count is: {count}</p>
      <button onClick={increase}>Increase Count!</button>
    </div>
  );
}

export default One;
