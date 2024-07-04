import React, { useState } from 'react'

function D() {
 var [name] = useState('sachin')
  return (
    <div>D: {name}</div>
  )
}

export default D