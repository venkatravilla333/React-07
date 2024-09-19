import React, { useState } from 'react'

function Controlled() {
  var [data, setData] = useState('')
  
  var changeHandler = (e) => {
    setData(e.target.value)
  }
  return (
    <div>
      <h2>Data: {data}</h2>
      <input type="text" value={data} onChange={changeHandler}/>
    </div>
  )
}

export default Controlled