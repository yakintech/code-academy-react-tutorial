import { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ToDoPageWithAxios from "./axiosSample/ToDoPageWithAxios";

import ParentComponent from "./memoSample/ParentComponent";
import AboutPage from "./routerSample/AboutPage";
import ContactPage from "./routerSample/ContactPage";
import HomePage from "./routerSample/HomePage";
import NotFound from "./routerSample/NotFound";
import PostDetail from "./routerSample/PostDetail";
import Posts from "./routerSample/Posts";


//PARENT COMPONENT!!
function App() {


  return <>

    <nav>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

    <footer>
      <h1>Site Footer</h1>
    </footer>

  </>

}

export default App;
