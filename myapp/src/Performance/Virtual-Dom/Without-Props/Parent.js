import React, { useState } from 'react'
import Child from './Child'

function Parent() {
var [count, setCount] =  useState(0)
  console.log('parent render')
  return (
    <div>
      <h1>Parent component : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Parent button</button>
      <Child/>
    </div>
  )
}

export default Parent