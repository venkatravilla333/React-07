import React from 'react'
import F from './F'
import G from './G'

function E(props) {
  return (
    <div>
      <F posts={props.posts } />
      <G />
    </div>
  )
}

export default E