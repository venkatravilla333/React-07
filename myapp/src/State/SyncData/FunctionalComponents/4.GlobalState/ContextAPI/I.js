import React, { useContext } from 'react'
import J from './J'
import K from './K'
import { countContext } from './A'

function I(props) {
  // console.log(props)
 var [count] = useContext(countContext)
  return (
    <div>
      <h3>I: count: {count}</h3>
      {/* <J name={props.name} /> */}
      <J />
      <K />
    </div>
  )
}

export default I