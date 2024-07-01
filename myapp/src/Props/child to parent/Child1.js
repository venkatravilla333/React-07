import React from 'react'

function Child1(props) {
  console.log(props)
  return (
    <div>
     <h4>Child1</h4> 
     <button onClick={()=>props.test('child data')}>Send data to parent</button>
      </div>
  )
}

export default Child1