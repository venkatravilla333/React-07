import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increase } from '../Redux/countActions';

function D() {

  var count = useSelector((state) => state.count)
 var dispatch = useDispatch()
  return (
    <div>
      <h3>D: {count}</h3>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={()=>dispatch(increase())}>decrease</button>
    </div>
  );
}

export default D