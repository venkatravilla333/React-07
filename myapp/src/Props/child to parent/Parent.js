import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  function test(x) {
    console.log(x)
  }
  return (
    <div>
      <h4>{x}</h4>
      <Child1 test={test} />
      <Child2 />
    </div>
  )
}

export default Parent



