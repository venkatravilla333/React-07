import React, { useContext } from 'react'
import { nameContext } from './A'

function D(props) {
  // console.log(props)
  //  var [name] = useState('sachin')
 var name = useContext(nameContext)
  return (
    // <div>D: {props.name} </div>
    <div>D: {name}</div>
  )
}

export default D