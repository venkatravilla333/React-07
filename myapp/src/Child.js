
import React from "react"

function Child(props) {
  console.log(props)
  var x = 100
  return (
    <div>Child {props.data}, {x}, num: {props.num}</div>
  )
}

export default Child



// class Child extends React.Component{
//   render() {
//     return <h2>Child</h2>
//   }
// }

// export default Child