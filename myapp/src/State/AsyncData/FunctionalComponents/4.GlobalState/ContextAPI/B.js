import React, { useState } from 'react'
import D from './D'
import E from './E'

function B(props) {
  //  var [name] = useState('sachin')
  // console.log(props)
  return (
    <div>
      {/* <D name={props.name} />
      <E name={props.name} /> */}
      <D />
      <E />
    </div>
  )
}

export default B