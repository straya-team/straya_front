import React from "react";
import Login from "./page/Login";
import "./style.scss";
import SignUp from "./page/SignUp";
import Profile from "./page/Profile";
import Main from "./page/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./page/Product";

function App() {
  return (
    <BrowserRouter>
      {localStorage.getItem("current user") ? (
        <Routes>
          <Route element={<Profile />} path="/profile" />
          <Route element={<Product />} path="/product" />
          <Route element={<Main />} path="/" />
        </Routes>
      ) : (
        <Routes>
          <Route element={<Login />} path="/Login" />
          <Route element={<SignUp />} path="/SignUp" />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
