import React from 'react'

function Child2(props) {
  console.log(props)
  return (
    <div>Child2: {props.data}</div>
  )
}

export default Child2