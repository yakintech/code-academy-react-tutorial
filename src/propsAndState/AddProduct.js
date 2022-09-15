import React, { useEffect, useState } from 'react'

function AddProduct(props) {

    const { add, updateProductItem, updateProductFromList } = props;

    const [name, setname] = useState('');
    const [price, setprice] = useState(0);
    const [stock, setstock] = useState(0);
    const [id, setid] = useState(0)


    useEffect(() => {

        setname(updateProductItem.name)
        setprice(updateProductItem.price)
        setstock(updateProductItem.stock)
        setid(updateProductItem.id)
      
    }, [updateProductItem])
    

    const addProduct = () => {

        let randomId = Math.floor(Math.random() *  10000)

        let newProduct = {
            id: randomId,
            name: name,
            unitPrice: price,
            unitsInStock: stock
        };

        add(newProduct);
    }


    const updateProduct = () => {

        let updateItem = {
            id: id,
            name:name,
            unitPrice: price,
            unitsInStock : stock
        };

        updateProductFromList(updateItem);


    }


    return (<>
        <div>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} />

            </div>
            <div>
                <label>Price:</label>
                <input type='text' value={price} onChange={(e) => setprice(e.target.value)} />
            </div>
            <div>
                <label>Stock:</label>
                <input type='text' value={stock} onChange={(e) => setstock(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addProduct()}>Add</button>
                <button onClick={() => updateProduct()}>Update</button>

            </div>
      
        </div>
    </>
    )
}

export default AddProduct