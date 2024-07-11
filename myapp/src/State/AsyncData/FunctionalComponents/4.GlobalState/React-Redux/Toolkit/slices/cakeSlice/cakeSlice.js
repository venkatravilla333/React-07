
import { createSlice } from '@reduxjs/toolkit'

var initialState = {
  noOfCakes: 1000
}


var cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.noOfCakes -= 1
    }
  }
})

export default cakeSlice.reducer
export var {buyCake} = cakeSlice.actions