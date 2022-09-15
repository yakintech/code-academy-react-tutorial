import React from 'react'

function ProductList({ products, deleteProduct }) {

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item, index) => {

                       return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td onClick={() => deleteProduct(item.id)} style={{cursor:'pointer', color:'tomato'}}>Delete</td>
                        </tr>

                    })
                }

            </tbody>
        </table>
    </>
    )
}

export default ProductList