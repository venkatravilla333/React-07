import React, { useContext } from 'react'
import { countContext } from './A';

function F() {
    var { countState, dispatchKey } = useContext(countContext);
  return (
    <div>F: {countState.count}</div>
  )
}

export default F