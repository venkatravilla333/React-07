import React from 'react'

function Child1(props) {
  console.log(props)
  return (
    <div>
      <h2>Child</h2>
      <button onClick={()=>props.test('child data')}>Button in child-1</button>
    </div>
  )
}

export default Child1