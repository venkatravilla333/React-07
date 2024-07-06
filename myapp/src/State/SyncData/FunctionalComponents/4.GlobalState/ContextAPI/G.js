import React, { useContext } from 'react'
import { nameContext, productContext } from './A'

function G() {
  // var name = nameContext._currentValue
 var productsData = useContext(productContext)
 var name = useContext(nameContext)
  return (
    <div>
      <h5>G : {name}</h5>
      <h5>G : product name: {productsData.name}</h5>
      <h5>G : product price: {productsData.price}</h5>
    </div>
  );
}

export default G