import FavoritesPage from "../contextSample/FavoritesPage";
import ProductList from "../contextSample/ProductList";
import HomePage from "./HomePage";

export const routeConfig = [
    {
        path: '/',
        element:<HomePage />
    },
    {
        path: '/favorites',
        element:<FavoritesPage />
    },
    {
        path: '/products',
        element:<ProductList />
    }
]