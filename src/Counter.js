import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const isOdd = count % 2 !== 0;
  const backgroundColor = isOdd ? "red" : "blue";

  return (
    <div style={{ backgroundColor }}>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Tambah</button>
      <button onClick={decrementCount} disabled={count <= 0}>
        Kurang
      </button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
