import React from 'react'
import ProductDetail from './ProductDetail'
import UserDetail from './UserDetail'

function Main(props) {

    let newProduct = {
        name: 'IPhone',
        price: 250
    }

    return (
        <>
            <UserDetail name={props.name} surname={props.surname} />
            <ProductDetail product={newProduct} />
        </>

    )
}

export default Main