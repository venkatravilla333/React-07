import React, { useRef } from 'react'

function Uncontrolled() {
  var inputRef = useRef()
  
  var clickHandler = () => {
   alert(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default Uncontrolled