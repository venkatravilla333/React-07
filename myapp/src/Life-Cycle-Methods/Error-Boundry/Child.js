import React from 'react'

function Child({ age }) {
  if (age < 18) {
    throw Error('Age must be >=18')
  }
  return (
    <div>Child : age: {age}</div>
  )
}

export default Child