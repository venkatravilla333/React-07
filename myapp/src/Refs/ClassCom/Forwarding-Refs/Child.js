import React from 'react'

const Child = React.forwardRef((props, refs) => {
  return (
    <div>
      <input type='text' ref={refs}/>
    </div>
  );
});

export default Child