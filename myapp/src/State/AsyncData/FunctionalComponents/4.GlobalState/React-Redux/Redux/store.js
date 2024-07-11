
import { combineReducers, createStore } from 'redux'
import { countReducer } from './count/countReducer'
import { cakeReducer } from './cake/cakeReducer'


// var x = 100

var rootReducer = combineReducers({
  countReducer: countReducer,
  cakeReducer: cakeReducer
})

export var store = createStore(rootReducer)