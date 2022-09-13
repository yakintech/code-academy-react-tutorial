import React from 'react'

function ProductList({ products, deleteProduct }) {


    return (
        <ul>
            {
                products.map((item) => {
                  return  <li style={{cursor:'pointer'}} onClick={() => deleteProduct(item.id)}>{item.name}</li>
                })
            }
        </ul>

    )
}

export default ProductList

