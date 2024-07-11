import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export var postsContext = React.createContext([])

function A() {
   var [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
  return (
    <div>
      <postsContext.Provider value={posts}>
      <B />
      <C />
      </postsContext.Provider>
    </div>
  )
}

export default A