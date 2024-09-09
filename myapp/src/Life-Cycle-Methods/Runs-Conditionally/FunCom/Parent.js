import React, { useEffect, useState } from 'react';

function Parent() {
  var [dCount, setDcount] = useState(0);
  var [nCount, setNcount] = useState(100);

  var updateDcount = () => {
    setDcount(dCount + 1);
  };
  var updateNcount = () => {
    setNcount(nCount + 1);
  };
  useEffect(() => {
    console.log('effect runs');
    document.title = `${dCount}`;
  }, [dCount]);
  console.log('render');
  return (
    <div>
      <h2>Dcount: {dCount}</h2>
      <button onClick={updateDcount}>update Dcount</button>
      <h2>Ncount: {nCount}</h2>
      <button onClick={updateNcount}>update Ncount</button>
    </div>
  );
}

export default Parent;
