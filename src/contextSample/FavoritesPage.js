import React, { useContext } from 'react'
import { favoritesContext } from './FavoritesContext'
import FavoritesPageTitle from './FavoritesPageTitle';

function FavoritesPage() {


    const { favorites, setfavorites } = useContext(favoritesContext);

    const removeItem = (item) => {

        const filteredFavorites = favorites.filter(q => q.id != item.id);
        setfavorites([...filteredFavorites])
    }

    return (
        <>
            <FavoritesPageTitle />
            <ul>
                {
                    favorites && favorites.map((item, key) => {
                        return <>
                            <li key={item.id}>{item.name}</li>
                            <button onClick={() => removeItem(item)}>Remove</button>
                        </>
                    })
                }
            </ul>
        </>

    )
}

export default FavoritesPage