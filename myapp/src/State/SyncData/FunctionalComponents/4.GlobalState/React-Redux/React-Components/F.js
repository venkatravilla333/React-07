import React, {Component, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Toolkit/slices/cakeSlice/cakeSlice';

// function F() {
//   var noOfCakes = useSelector((state) => state.cakeReducer.noOfCakes)
//   var dispatch = useDispatch()
//   return (
//     <div>
//       <h2>F: no fo cakes: {noOfCakes}</h2>
//       <button onClick={()=>dispatch(buyCake())}>buy cake</button>
//     </div>
//   );
// }

// export default F


export class F extends Component {
  render() {
    return (
      <div>
        <h2>F: no of cakes: {this.props.noOfCakes}</h2>
        <button onClick={this.props.buyCake}>buy cake</button>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    noOfCakes: state.cakeReducer.noOfCakes
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    buyCake: ()=>{dispatch(buyCake())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (F)

