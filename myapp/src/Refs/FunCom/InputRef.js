import React, { useEffect, useRef, useState } from 'react'

function InputRef() {
  var inputRef = useRef()
  console.log('render')
 var [data, setData] = useState('hari')
  
  useEffect(() => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }, [])

  var getValue = () => {
    console.log(inputRef.current.value)
    setData(inputRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getValue}>get value</button>
      <h3>{data}</h3>
      
    </div>
  )
}

export default InputRef