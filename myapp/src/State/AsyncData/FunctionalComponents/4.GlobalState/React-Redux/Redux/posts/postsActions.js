import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionTypes"
import axios from 'axios'



var fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
var fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}
var fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}


export var fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(res.data)
        dispatch(fetchPostsSuccess(res.data))
        
    })
      .catch((error) => {
        console.log(error.message)
      dispatch(fetchPostsFailure(error.message))
    })
  }
}