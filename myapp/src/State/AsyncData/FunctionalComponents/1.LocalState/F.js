import React, { useEffect, useState } from 'react'
import axios from 'axios'

function F(props) {
  // var [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res)=> {
  //       console.log(res.data)
  //       setPosts(res.data)
  //   })
  // })
  
  return (
    <div>
      <h3>F components</h3>
      {
        props.posts.map((obj) => {
        return  <p>{obj.id}. {obj.title}</p>
        })
      }
      
    </div>
  )
}

export default F