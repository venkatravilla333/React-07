import React from 'react'
import F from './F'
import G from './G'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Toolkit/slices/cakeSlice/cakeSlice'
import { decrease, increase } from '../Toolkit/slices/countSlice/countSlice'

function E() {
 var dispatch = useDispatch()
  var cakeState = useSelector((state) => state.cakeReducer)
 var  countState = useSelector(state => state.countReducer)
  return (
    <div>
      <h3>E: no of cakes: {cakeState.noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>buy cake</button>
      <h3>E: count: {countState.count}</h3>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={()=>dispatch(decrease())}>decrease</button>
      <F />
      <G />
    </div>
  )
}

export default E