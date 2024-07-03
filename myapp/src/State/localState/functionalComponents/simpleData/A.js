import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
  var [count, setCount ]= useState(10)
  // console.log(arr[0])
  // console.log(arr[1])
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+20)}>increase</button>
      <B />
      <C />
    </div>
  )
}

export default A