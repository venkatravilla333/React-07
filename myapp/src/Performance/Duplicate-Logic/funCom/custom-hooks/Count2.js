import React, { useState } from 'react';
import useCount from './useCount';

function Count2() {
  // var [count, setCount] = useState(0);

  // var increaseCount = () => {
  //   setCount(count + 1);
  // };

  var [count, increaseCount] = useCount();

  return (
    <div>
      <h3>Count2: {count}</h3>
      <button onMouseOver={increaseCount}>increase count</button>
    </div>
  );
}

export default Count2;
