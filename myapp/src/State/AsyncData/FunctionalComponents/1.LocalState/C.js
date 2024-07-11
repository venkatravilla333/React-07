
import React from 'react'
import H from './H'
import I from './I'

function C(props) {
  return (
    <div>
      <H />
      <I posts={props.posts} />
    </div>
  )
}

export default C