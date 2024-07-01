import React from 'react'

function Jsx() {
  // return (
    // <div>
    //   <p>This is para</p>
    //   <h1>This is Heading</h1>
    // </div>
    
  // var data =
  //   [<p>This is para</p>,
  //   <h1>This is Heading</h1>]
  // return data

  // return (
  //   <React.Fragment>
  //     <div>This is div</div>
  //     <p>This is para</p>
  //     <h1>This is Heading</h1>
  //   </React.Fragment>
  // );
    
  // ); 
  // return React.createElement('div', null, React.createElement('h1', null, 'This is JSX'))
  
  //valid things and invalid things in jsx
  
  // var x = 'sachin'
  // var x = 100
  // var x = true
  // var x = false
  // var x = undefined
  // var x = null
  // var x = {name : 'Kohli'}
  // var x = [1,2,3]
  var x = () => {
    return 10
  }
  
  return (
    <>
      <h3>This is Jsx: {x()}</h3>
    </>
  )
}
export default Jsx