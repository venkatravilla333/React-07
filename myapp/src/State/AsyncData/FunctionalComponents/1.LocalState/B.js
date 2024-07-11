import React from 'react'
import D from './D'
import E from './E'

function B(props) {
  return (
    <div>
      <D posts={props.posts} />
      <E posts={props.posts} />
    </div>
  );
}

export default B