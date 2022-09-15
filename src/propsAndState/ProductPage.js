import React, { useState } from 'react'
import { products as productList } from '../data/products'
import AddProduct from './AddProduct';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';

function ProductPage() {

    const [products, setproducts] = useState(productList);
    const [updateProductItem, setupdateProductItem] = useState({
        name:'',
        price:0,
        stock:0
    })


    const deleteProduct = (id) => {

        let filteredProducts = products.filter(q => q.id != id);

        setproducts(filteredProducts);
        // setproducts([...filteredProducts])
    }

    const add = (product) => {

        setproducts([...products, product]);

    }

    const updateProductFromList = (item) => {

        let product = products.find(q => q.id == item.id);
        product.name = item.name;
        product.unitPrice = item.unitPrice;
        product.unitsInStock = item.unitsInStock;

        setproducts([...products])

    }

    const updateForm = (item) => {

        setupdateProductItem({
            id: item.id,
            name:item.name,
            price:item.unitPrice,
            stock: item.unitsInStock
        })
    }

    return (<>
        <ProductHeader products={products} />
        <AddProduct add={add} updateProductItem={updateProductItem} updateProductFromList={updateProductFromList} />
        <ProductList products={products} deleteProduct={deleteProduct} updateForm={updateForm}  />
    </>
    )
}

export default ProductPage