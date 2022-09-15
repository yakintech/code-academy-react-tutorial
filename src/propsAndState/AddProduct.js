import React, { useState } from 'react'

function AddProduct(props) {

    const { add } = props;

    const [name, setname] = useState('');
    const [price, setprice] = useState(0);
    const [stock, setstock] = useState(0);


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


    return (<>
        <div>
            <div>
                <label>Name:</label>
                <input type='text' onChange={(e) => setname(e.target.value)} />

            </div>
            <div>
                <label>Price:</label>
                <input type='text' onChange={(e) => setprice(e.target.value)} />
            </div>
            <div>
                <label>Stock:</label>
                <input type='text' onChange={(e) => setstock(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addProduct()}>Add</button>
                <button>Update</button>

            </div>
      
        </div>
    </>
    )
}

export default AddProduct