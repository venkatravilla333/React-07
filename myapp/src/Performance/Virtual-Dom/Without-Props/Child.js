import React from 'react'

function Child() {
  console.log('child render')
  return (
    <h1>
      Child component
    </h1>
  )
}

export default React.memo(Child)