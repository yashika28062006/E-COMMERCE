import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx"
import CreateProduct from "../pages/createProduct.jsx";
import MyProducts from "../pages/myProducts.jsx";
import Cart from "../pages/cart.jsx";
import ProductDetails from "../pages/productDetails.jsx";
import Profile from "../pages/profile.jsx"
import CreateAddress from "../pages/createAddress.jsx";
import SelectAddress from "../pages/SelectAddress.jsx";
export { Login,Signup,Home, CreateProduct, MyProducts, Cart, ProductDetails, Profile,CreateAddress, SelectAddress}
/* eslint-disable no-unused-vars */

import './App.css';
import React from 'react';
import {Login,Signup,Home, CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress, SelectAddress} from "./Routes/Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderConfirmation from "../pages/OrderConfirmation.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create-user' element={<Signup/>}/>
    <Route path='/create-product' element={<CreateProduct/>}/>  
    {/* For edit product by id */}
    <Route path="/create-product/:id" element={<CreateProduct />} />
    <Route path="/my-products" element={<MyProducts/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/profile" element={<Profile />} />
    <Route path='/create-address' element={<CreateAddress />} />
    <Route path='/select-address' element={<SelectAddress/>}/>
    <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

