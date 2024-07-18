import React, { useRef, useState } from 'react'

function Value() {
  var normalVariable = 0
  var [stateVariable, setStateVariable] = useState(0)
  var refVariable = useRef(0)

  var updateNv = () => {
    normalVariable++
    console.log(normalVariable)
  }
  var updateSv = () => {
    setStateVariable(stateVariable + 1)
    console.log(stateVariable)
  }
  var updateRv = () => {
   refVariable.current++
    console.log(refVariable.current)
  }
  return (
    <div>
      <h2>Normal varaible: {normalVariable}</h2>
      <button onClick={updateNv}>Update Nv</button>
      <h2>State varaible {stateVariable}</h2>
      <button onClick={updateSv}>Update Sv</button>
      <h2>Ref varaible {refVariable.current}</h2>
      <button onClick={updateRv}>Update Sv</button>
    </div>
  )
}

export default Value