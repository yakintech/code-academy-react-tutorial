import React, { useContext } from 'react'
import { favoritesContext } from './FavoritesContext'

function FavoritesPageTitle() {

    const { favorites } = useContext(favoritesContext)

    return (
        <h1>Count: {favorites.length}</h1>
    )
}

export default FavoritesPageTitle