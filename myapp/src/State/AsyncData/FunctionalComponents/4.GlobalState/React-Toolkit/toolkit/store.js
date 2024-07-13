
import {configureStore} from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'

export var store = configureStore({
  reducer: {
    postsReducer: postsReducer
  }
})