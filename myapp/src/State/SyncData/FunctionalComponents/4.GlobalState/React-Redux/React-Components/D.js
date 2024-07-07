import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import { decrease, increase } from '../Redux/count/countActions'
import { buyCake } from '../Redux/cake/cakeActions'

function D() {

//   var countState = useSelector((state) => state.countReducer)
//   var cakeState = useSelector((state) => state.cakeReducer)
//  var dispatch = useDispatch()
  return (
    <div>
      {/* <h3>D: count1: {countState.count1}</h3>
      <h3>D: count2: {countState.count2}</h3>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={()=>dispatch(decrease())}>decrease</button> */}
      {/* <h3>D: cake: {cakeState.noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button> */}
    </div>
  );
}

export default D