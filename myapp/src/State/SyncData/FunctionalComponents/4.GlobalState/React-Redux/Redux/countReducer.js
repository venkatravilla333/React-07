import { DECREASE, INCREASE } from "./countActions";


var initialState = {
  count: 0
}

export var countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1
      }
      break;
    case DECREASE:
      return {
        count: state.count - 1
      }
    default:
      return initialState
  }
}