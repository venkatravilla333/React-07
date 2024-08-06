import React from 'react'

function CallbackChild(props) {

  console.log('child render')
  return (
    <div>
      <h2>Count in child </h2>
    </div>
  )
}

export default React.memo(CallbackChild)