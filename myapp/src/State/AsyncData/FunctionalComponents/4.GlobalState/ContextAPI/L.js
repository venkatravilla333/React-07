import React, { useContext } from 'react';
import { postsContext } from './A';

function L() {
  var data = useContext(postsContext);
  console.log(data)
  return (
    <div>
      <h3>L component</h3>
      {data.loading ? <h2>Loading</h2> : data.error ? <h3>{data.error}</h3> : 
        data.posts.map((obj) => {
        return  <p>{obj.id}. {obj.title}</p>
        })
}
    </div>
  );
}

export default L;
