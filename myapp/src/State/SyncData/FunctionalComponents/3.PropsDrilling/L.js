import React from 'react'

function L(props) {
  console.log(props)
//  var [name] = useState('sachin')
  return (
    <div>L: {props.name}</div>
  )
}

export default L