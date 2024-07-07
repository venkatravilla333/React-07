import { DECREASE, INCREASE } from "./countActions";


var initialState = {
  count1: 0,
  count2: 100
}

export var countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count1: state.count1 + 1,
        count2: state.count2 + 1
      }
      break;
    case DECREASE:
      return {
        ...state,
        count1: state.count1 - 1,
        count2: state.count2 - 1
      }
    default:
      return state
  }
}