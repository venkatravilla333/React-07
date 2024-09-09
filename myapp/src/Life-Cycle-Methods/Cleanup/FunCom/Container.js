import React, { useState } from 'react';
import Parent from './Parent';

function Container() {
  var [display, setDisplay] = useState(true);
  return (
    <div id='container'>
      <button onClick={() => setDisplay(!display)}>toggle display</button>
      {display && <Parent />}
    </div>
  );
}

export default Container;
