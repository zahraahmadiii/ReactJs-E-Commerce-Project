import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import AdminLogin from "../Pages/AdminLogin"
import Cart from "../Pages/Cart"
import AdminPanel from '../Pages/AdminPanel'
import ProductPanel from "../Pages/ProductPanel"
import Quantity from '../Pages/Quantity'
import OrdersPanel from '../Pages/OrdersPanel'
import CheckOut from '../Pages/Checkout'
import Payment from '../Pages/Payment'
import FailPay from '../Pages/FailPay'
import SuccessPay from '../Pages/SuccessPay'
import ProductDetail from '../Pages/ProductDetail'
import Categories from '../Pages/Categories';
import Products from '../Pages/Products';
const Routs = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
        <Route path='/AdminLogin/AdminPanel' element={<AdminPanel/>}></Route>
        <Route path='/AdminLogin/AdminPanel/ProductPanel' element={<ProductPanel/>}></Route>
        <Route path='/AdminLogin/AdminPanel/Quantity' element={<Quantity />}></Route>
        <Route path='/AdminLogin/AdminPanel/OrdersPanel' element={<OrdersPanel/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Cart/CheckOut' element={<CheckOut/>}></Route>
        <Route path='/Cart/CheckOut/Payment' element={<Payment/>}></Route>
        <Route path='/Cart/CheckOut/Payment/FailPay' element={<FailPay/>}></Route>
        <Route path='/Cart/CheckOut/Payment/SuccessPay' element={<SuccessPay/>}></Route>
        <Route path='/Categories' element={<Categories/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Products/ProductDetail' element={<ProductDetail/>}></Route>
      
    </Routes>
    </>
  )
}

export default Routs;