import React, { useContext } from 'react'
import L from './L'
import { countContext } from './A';

function J(props) {
  // console.log(props)
  var [count] = useContext(countContext);
  return (
    <div>
      <h4>J: count: {count}</h4>
      {/* <L name={props.name} /> */}
      <L />
    </div>
  )
}

export default J