import React, { useState } from 'react';
import useCount from './useCount';

function Count3() {
  // var [count, setCount] = useState(0);

  // var increaseCount = () => {
  //   setCount(count + 1);
  // };

  var [count, increaseCount] = useCount();

  return (
    <div>
      <h3>Count3: {count}</h3>
      <button onDoubleClick={increaseCount}>increase count</button>
    </div>
  );
}

export default Count3;
