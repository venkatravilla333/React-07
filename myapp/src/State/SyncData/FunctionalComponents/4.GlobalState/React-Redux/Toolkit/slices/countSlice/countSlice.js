import { createSlice } from '@reduxjs/toolkit';

var initialState = {
  count: 0,
};

var countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -=1
    }
  },
});

export default countSlice.reducer;
export var { increase, decrease } = countSlice.actions;
