import React, { useContext } from 'react'
import { ageContext, nameContext } from './A'

function L(props) {
  // console.log(props)
  //  var [name] = useState('sachin')
  
  //  var name = nameContext._currentValue
  
  var name = useContext(nameContext)
 var age =  useContext(ageContext)
  return (
    // <div>L: {props.name}</div>
    <div>L: name: {name}, age: {age}</div>
  )
}

export default L