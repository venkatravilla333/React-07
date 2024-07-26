import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductInfo() {
  var { id } = useParams()
  var location = useLocation()
  console.log(location)
  
  return (
    <div>
      <h2>Product Info component</h2>
      <h2>Product id: {location.state.id} </h2>
      <h2>Product name: {location.state.name} </h2>
      <h2>Product price: {location.state.price} </h2>
    </div>
  );
}

export default ProductInfo