import React from 'react'

function D(props) {
  console.log(props)
//  var [name] = useState('sachin')
  return (
    <div>D: {props.name} </div>
  )
}

export default D