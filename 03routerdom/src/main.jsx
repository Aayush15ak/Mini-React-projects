import React from "react";
import ReactDOM from "react-dom/client";
import Github, { Gitloader } from './components/Github.jsx'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Layout from "./Layout.jsx";
import User from "./components/User.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user" element={<User />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={Gitloader} path="github" element={<Github/>} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);