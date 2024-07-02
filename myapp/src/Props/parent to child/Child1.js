import React from 'react'

function Child1(props) {
  console.log(props)
  // console.log(props.name = 'kohli')
  return (
    <div>Child1 : {props.name}</div>
  )
}

export default Child1