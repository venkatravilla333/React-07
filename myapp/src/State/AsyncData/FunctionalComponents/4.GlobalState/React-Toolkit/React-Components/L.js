import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../toolkit/slices/postsSlice';

function L() {
  var postsData = useSelector((state) => state.postsReducer);

  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h4>L: components</h4>
      {postsData.loading ? (
        <h3>Loading</h3>
      ) : postsData.error ? (
        <h3>{postsData.error}</h3>
      ) : (
        postsData.posts.map((obj) => {
          return (
            <p>
              {obj.id}. {obj.title}
            </p>
          );
        })
      )}
    </div>
  );
}

export default L;