import React, { useContext, useEffect, useState } from 'react'
import { favoritesContext } from './FavoritesContext';

function ProductList() {

    const [products, setproducts] = useState([]);

    //subs to favoritesContext
    const {favorites, setfavorites} = useContext(favoritesContext)


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })

    }, []);

    const addToFavorites = (item) => {

        let favoriteProduct = favorites.find(q => q.id == item.id);

        if(!favoriteProduct){
            setfavorites([...favorites, item ])
        }
    }



    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Favorite</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item, index) => {

                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td> 
                            <td><button onClick={() => addToFavorites(item)}>Add to favorites</button></td>
                        </tr>

                    })
                }

            </tbody>
        </table>
    )
}

export default ProductList