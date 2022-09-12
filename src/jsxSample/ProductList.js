import React from 'react'
import { products } from '../data/products'


function ProductList() {

    //fiyatı 30 dan büyük olanlar tomato renginde olsun! react bilenler bunu table içerisinde yazsın!!
    
    return (
        <ul>
            {
                products.map((item) => <li>{item.name} / {item.unitPrice.toFixed(2)}</li>)
            }
        </ul>
    )
}

export default ProductList