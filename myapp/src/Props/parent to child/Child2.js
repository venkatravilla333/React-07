import React from 'react'

function Child2(props) {
  console.log(props)
  return (
    <div>Child2: {props.name}</div>
  )
}

export default Child2