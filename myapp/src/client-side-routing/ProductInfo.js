import React from 'react'
import { useParams } from 'react-router-dom'

function ProductInfo() {
  var {id} = useParams()
  return (
    <div>ProductInfo {id}</div>
  )
}

export default ProductInfo