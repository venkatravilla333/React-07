import React, { useMemo, useState } from 'react'
import Child from './Child'

function Parent() {
  var [count, setCount] = useState(0)

  // var x = 100
  var x = useMemo(() => 
 ({value: 100}), [])
  
  console.log('parent render')
  return (
    <div>
      <h1>Parent component: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Parent button</button>      
     
      <Child x={{...x, age: 20}} />
    
    </div>
  )
}

export default Parent