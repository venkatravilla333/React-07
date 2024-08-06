import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

function CallbackParent() {
  var [count, setCount] = useState(0)

  var increaseCount = () => {
    setCount(count+1)
  }

  var x = useCallback(() => {
   return () => {};
  }, []) 



  console.log('parent render')
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>increae count</button>
      <CallbackChild x={x} />
    </div>
  )
}

export default CallbackParent