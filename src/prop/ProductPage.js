import React from 'react'
import { products } from '../data/products'
import ProductList from './ProductList';

function ProductPage() {

    let productList = products;


    const deleteProduct = (id) => {

        alert('PARENT' +  id)

    }


    return (
        <>
            <h1>Product Page</h1>
            <p>lorem morem</p>


            <ProductList products={productList} deleteProduct={deleteProduct} />
            
        </>

    )
}

export default ProductPage