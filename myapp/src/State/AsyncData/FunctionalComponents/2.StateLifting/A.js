import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
 var [name] = useState('sachin')
  return (
    <div>
      <B />
      <C />
    </div>
  )
}

export default A