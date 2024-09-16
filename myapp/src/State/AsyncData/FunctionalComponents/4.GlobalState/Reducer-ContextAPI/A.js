import React, { useReducer } from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext(100)
console.log(countContext._currentValue)

var initialState = {
  count: 0
}

var countReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1
      }
      break;
    case 'decrease':
      return {
        count: state.count - 1
      }
      break;
    case 'reset':
      return {
        count: state.count=0
      }
      break;
    default: 
      return state
  }
}

function A() {
var [countState, dispatch] = useReducer(countReducer, initialState)
  return (
    <div>
     
      <countContext.Provider value={{countState: countState, dispatchKey: dispatch}}>
      <B />
      <C />
      </countContext.Provider>
    </div>
  );
}

export default A