import React from 'react'
import { useSelector } from 'react-redux';

function H() {
   var cakeState = useSelector((state) => state.cakeReducer);
  return (
    <h3>H: {cakeState.noOfCakes }</h3>
  )
}

export default H