import React, { useState } from 'react'

function F() {
 var [name] = useState('sachin')
  return (
    <div>F: {name}</div>
  )
}

export default F