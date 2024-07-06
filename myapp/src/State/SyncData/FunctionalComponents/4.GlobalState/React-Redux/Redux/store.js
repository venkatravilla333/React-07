
import { createStore } from 'redux'
import { countReducer } from './countReducer'

// var x = 100

export var store = createStore(countReducer)