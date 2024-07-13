
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export var fetchPosts = createAsyncThunk('Posts/fetchPosts', async() => {
  var res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data
});

var initialState = {
  loading: false,
  posts: [],
  error: ''
}


var postsSlice = createSlice({
  name: 'Posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
        
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    
  }
})
export default postsSlice.reducer