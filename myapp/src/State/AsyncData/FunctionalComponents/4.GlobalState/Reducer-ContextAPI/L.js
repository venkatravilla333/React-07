import React, { useContext } from 'react'
import { countContext } from './A'

function L() {
  // console.log(countContext._currentValue)
  var { countState, dispatchKey } = useContext(countContext);
  return (
    <div>
      <h2>L: {countState.count}</h2>
   
      <button onClick={() => dispatchKey({ type: 'increase' })}>increase</button>
      <button onClick={() => dispatchKey({ type: 'decrease' })}>decrease</button>
      <button onClick={() => dispatchKey({ type: 'reset' })}>reset</button>
    </div>
  );
}

export default L