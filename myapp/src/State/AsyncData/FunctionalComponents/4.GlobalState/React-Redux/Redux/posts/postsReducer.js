import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionTypes"


var initialState = {
  loading: false,
  posts: [],
  error: ''
}

export var postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
      break;
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
      break;
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
    
  }
}