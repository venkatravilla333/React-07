import React from 'react'

function Child({data:  {name, address: {city}}}) {
  // console.log(props)
  // var {data: {name, address:{city}}} = props
  return (
    <div>
      <h3>Child</h3>
      {/* <h3>Name: {props.data.name}</h3>
      <h3>City: {props.data.address.city}</h3> */}
      <h3>Name: {name}</h3>
      <h3>City: {city}</h3>
    </div>
  )
}

export default Child