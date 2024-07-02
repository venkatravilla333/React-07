import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  // var x = 100
 var [x, setX] = useState(100)
  

  function test(data) {
    //  x = data
    setX(data)
    console.log(data)
  }
  return (
    <div>
      <h2>Parent {x}</h2>
      <Child1 test={test} />
      <Child2 data={x} />
    </div>
  )
}

export default Parent