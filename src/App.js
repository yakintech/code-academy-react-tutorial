import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ToDoPageWithAxios from "./axiosSample/ToDoPageWithAxios";
import { FavoritesProvider } from "./contextSample/FavoritesContext";
import FavoritesPage from "./contextSample/FavoritesPage";
import ProductList from "./contextSample/ProductList";

import ParentComponent from "./memoSample/ParentComponent";
import AboutPage from "./routerSample/AboutPage";
import ContactPage from "./routerSample/ContactPage";
import HomePage from "./routerSample/HomePage";
import NotFound from "./routerSample/NotFound";
import PostDetail from "./routerSample/PostDetail";
import Posts from "./routerSample/Posts";
import ReactFormSample from "./formikSample/ReactFormSample";
import FormikSample from "./formikSample/FormikSample";
import SupplierNetworkSample from "./networkSample/SupplierNetworkSample";

//PARENT COMPONENT!!
function App() {


  return <>

    <FavoritesProvider>

      <nav>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/favorites'>Favorites</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/formiksample'>Formik Sample</Link></li>
          <li><Link to='/supplierNetworkSample'>SupplierNetworkSample</Link></li>


        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/formikSample" element={<FormikSample/>} />
        <Route path="/supplierNetworkSample" element={<SupplierNetworkSample/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>
        <h1>Site Footer</h1>
      </footer>


    </FavoritesProvider>

  </>

}

export default App;
