import React, { useState } from 'react'
import B from './B'
import C from './C'



export var nameContext = React.createContext('sachin')
export var ageContext = React.createContext(40)
export var productContext = React.createContext({name: 'mobile', price: 20000})
// console.log(nameContext._currentValue)

function A() {
//  var [name] = useState('sachin')
  return (
    <div>
      {/* <B name={name} />
      <C name={name} /> */}
      <productContext.Provider value={{ name: 'laptop', price: 30000 }}>
        <ageContext.Provider value={50}>
          <nameContext.Provider value={'kohli'}>
            <B />
            <C />
          </nameContext.Provider>
        </ageContext.Provider>
      </productContext.Provider>
    </div>
  );
}

export default A



