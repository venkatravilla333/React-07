import React, {useContext} from 'react'
import F from './F'
import G from './G'
import { countContext } from './A'

function E(props) {
  // console.log(props)
var [count, setCount] = useContext(countContext)
  return (
    <div>
      {/* <F name={props.name} /> */}
      <h3>E: count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>update count in E</button>
      <F />
      <G />
    </div>
  )
}

export default E