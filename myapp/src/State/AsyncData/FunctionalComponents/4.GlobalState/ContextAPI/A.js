import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export var postsContext = React.createContext([])

function A() {
 var [loading, setLoading] = useState(false);
 var [posts, setPosts] = useState([]);
 var [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      setLoading(false)
      setPosts(res.data);
    }).catch((error) => {
      setLoading(false)
      setError(error.mesage)
    })
  }, []);
  return (
    <div>
      <postsContext.Provider value={{loading: loading, posts: posts, error: error}}>
      <B />
      <C />
      </postsContext.Provider>
    </div>
  )
}

export default A