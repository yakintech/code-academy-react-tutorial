import React, { useState } from 'react'
import { products as productList } from '../data/products'
import AddProduct from './AddProduct';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';

function ProductPage() {

    const [products, setproducts] = useState(productList);


    const deleteProduct = (id) => {

        let filteredProducts = products.filter(q => q.id != id);

        setproducts(filteredProducts);
        // setproducts([...filteredProducts])
    }

    const add = (product) => {

        setproducts([...products, product]);

    }

    return (<>
        <ProductHeader products={products} />
        <AddProduct add={add} />
        <ProductList products={products} deleteProduct={deleteProduct} />
    </>
    )
}

export default ProductPage