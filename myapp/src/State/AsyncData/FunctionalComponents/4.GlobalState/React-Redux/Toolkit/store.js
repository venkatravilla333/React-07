
import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './slices/cakeSlice/cakeSlice'
import countReducer from './slices/countSlice/countSlice'

export var store = configureStore({
  reducer: {
    cakeReducer: cakeReducer,
    countReducer: countReducer
  }
})