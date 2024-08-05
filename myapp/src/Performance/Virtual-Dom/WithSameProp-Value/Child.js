import React from 'react'


var Child = React.memo( (props)=> {
  console.log('child render');
  return (
    <div>
      <h1>Child component: {}</h1>
    </div>
  );
})


export default React.memo(Child)