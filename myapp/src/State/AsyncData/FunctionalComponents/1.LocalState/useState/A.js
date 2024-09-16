import React, { useEffect, useState } from 'react';
import B from './B';
import C from './C';
import axios from 'axios';

function A() {
  var [loading, setLoading] = useState(false);
  var [posts, setPosts] = useState([]);
  var [error, setError] = useState(null);
  console.log(error);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <div>
      <h3>A: component</h3>
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h4>{error.message}</h4>
        ) : (
          <div>
            {posts.map((obj) => {
              return (
                <p>
                  {obj.id}. {obj.title}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <B posts={posts} />
      <C posts={posts} />
    </div>
  );
}

export default A;
