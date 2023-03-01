import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import AdminLogin from "../Pages/AdminLogin"
import Cart from "../Pages/Cart"
import AdminPanel from '../Pages/AdminPanel'
import ProductPanel from "../Pages/ProductPanel"
import InventoryPrice from '../Pages/InventoryPrice'
import OrdersPanel from '../Pages/OrdersPanel'
import RegisterCustomer from '../Pages/RegisterCustomer'
import Payment from '../Pages/Payment'
import FailPay from '../Pages/FailPay'
import SuccessPay from '../Pages/SuccessPay'
import Mobile from "../Pages/Mobile"
import Tablet from '../Pages/Tablet'
import Laptop from "../Pages/Laptop"
import ProductCategory from '../Pages/ProductCategory'
import ProductDetail from '../Pages/ProductDetail'
import AirPod from '../Pages/Airpod'
const Routs = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
        <Route path='/AdminLogin/AdminPanel' element={<AdminPanel/>}></Route>
        <Route path='/AdminLogin/AdminPanel/ProductPanel' element={<ProductPanel/>}></Route>
        <Route path='/AdminLogin/AdminPanel/InventoryPrice' element={<InventoryPrice />}></Route>
        <Route path='/AdminLogin/AdminPanel/OrdersPanel' element={<OrdersPanel/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Cart/RegisterCustomer' element={<RegisterCustomer/>}></Route>
        <Route path='/Cart/RegisterCustomer/Payment' element={<Payment/>}></Route>
        <Route path='/Cart/RegisterCustomer/Payment/FailPay' element={<FailPay/>}></Route>
        <Route path='/Cart/RegisterCustomer/Payment/SuccessPay' element={<SuccessPay/>}></Route>
        {/* <Route path='/Products' element={<Products/>}></Route> */}
        <Route path='/Mobile' element={<Mobile/>}></Route>
        <Route path='/Mobile/ProductCategory' element={<ProductCategory/>}></Route>
        <Route path='/Mobile/ProductCategory/ProductDetail' element={<ProductDetail/>}></Route>
        <Route path='/Tablet' element={<Tablet/>}></Route>
        <Route path='/Tablet/ProductCategory' element={<ProductCategory/>}></Route>
        <Route path='/Tablet/ProductCategory/ProductDetail' element={<ProductDetail/>}></Route>
        <Route path='/Laptop' element={<Laptop/>}></Route>
        <Route path='/Laptop/ProductCategory' element={<ProductCategory/>}></Route>
        <Route path='/Laptop/ProductCategory/ProductDetail' element={<ProductDetail/>}></Route>
        <Route path='AirPod' element={<AirPod/>}></Route>
        <Route path='/Airpod/ProductCategory' element={<ProductCategory/>}></Route>
        <Route path='/AirPod/ProductCategory/ProductDetail' element={<ProductDetail/>}></Route>
        
    </Routes>
    </>
  )
}

export default Routs;