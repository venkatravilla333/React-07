import React, { useContext } from 'react';
import { postsContext } from './A';

function L() {
  var posts = useContext(postsContext);
  return (
    <div>
      <h3>L component</h3>
      {posts.map((obj) => {
        return (
          <p>
            {obj.id}. {obj.title}
          </p>
        );
      })}
    </div>
  );
}

export default L;
