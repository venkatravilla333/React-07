import React, { useContext } from 'react'
import { postsContext } from './A'

function D() {
var data =  useContext(postsContext)
  return (
    <div>
      <h3>D component</h3>
      {data.loading ? <h2>Loading</h2> : data.error ? <h3>{data.error}</h3> :
        data.posts.map((obj) => {
          return <p>{obj.id}. {obj.title}</p>
        })
      }
    </div>
  );
}

export default D