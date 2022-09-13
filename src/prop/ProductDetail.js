import React from 'react'

function ProductDetail(props) {
  return (
    <>
        <h1>{props.product.name}</h1>
        <h1>{props.product.price}</h1>
    </>
  )
}

export default ProductDetail


