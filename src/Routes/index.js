import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import LoginPanel from "../Pages/LoginPanel"
import Cart from "../Pages/Cart"
import AdminPanel from '../Pages/AdminPanel'
import ProductPanel from "../Pages/ProductPanel"
import Quantity from '../Pages/Quantity'
import CheckOut from '../Pages/Checkout'
import Payment from '../Pages/Payment'
import FailPay from '../Pages/FailPay'
import SuccessPay from '../Pages/SuccessPay'
import ProductDetail from '../Pages/ProductDetail'
import Products from '../Pages/Products';
const Routs = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/LoginPanel' element={<LoginPanel/>}></Route>
        <Route path='/LoginPanel/AdminPanel' element={<AdminPanel/>}></Route>
        <Route path='/LoginPanel/AdminPanel/ProductPanel' element={<ProductPanel/>}></Route>
        <Route path='/LoginPanel/AdminPanel/Quantity' element={<Quantity />}></Route>
        <Route path='/LoginPanel/AdminPanel' element={<AdminPanel/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Cart/CheckOut' element={<CheckOut/>}></Route>
        <Route path='/Cart/CheckOut/Payment' element={<Payment/>}></Route>
        <Route path='/Cart/CheckOut/Payment/FailPay' element={<FailPay/>}></Route>
        <Route path='/Cart/CheckOut/Payment/SuccessPay' element={<SuccessPay/>}></Route>
        
        <Route path='/Products/'>
         <Route path=':productCategory' element={<Products/>}></Route>
        </Route>

        <Route path='/Products/ProductDetail/' >
          <Route path=':productId' element={<ProductDetail/>}></Route>
        </Route>
      
    </Routes>
    </>
  )
}

export default Routs;