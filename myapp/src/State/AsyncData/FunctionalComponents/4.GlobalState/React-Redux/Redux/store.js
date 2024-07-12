
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { countReducer } from './count/countReducer'
import { cakeReducer } from './cake/cakeReducer'
import { postsReducer } from './posts/postsReducer'
import {thunk} from 'redux-thunk'


// var x = 100

var rootReducer = combineReducers({
  countReducer: countReducer,
  cakeReducer: cakeReducer,
  postsReducer: postsReducer
})

export var store = createStore(rootReducer, applyMiddleware(thunk))