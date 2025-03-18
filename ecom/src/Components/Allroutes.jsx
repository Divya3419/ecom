import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Singup";
import Products from "../Pages/Products";
import Product from "../Pages/Product";


const Allroutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="product" element={<Product/>}/> 
        </Routes>
    )
}

export default Allroutes