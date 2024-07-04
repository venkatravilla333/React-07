import React, { useState } from 'react'

function L() {
 var [name] = useState('sachin')
  return (
    <div>L: {name}</div>
  )
}

export default L