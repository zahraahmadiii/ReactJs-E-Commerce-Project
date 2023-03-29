import styles from "./style.module.css"
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import React, { useEffect } from 'react'
import OrderTable from "../../Components/OrderTable/index.js";
import {useDispatch, useSelector} from 'react-redux'
import { getOrder, setDelivery } from '../../redux/Features/orders-slice.js';
import OrderModal from "../../Components/Order-modal"
import { Navigate } from "react-router-dom";
 const AdminPanel = () => {

  const orders = useSelector(store => store.ordersSlice);
 

   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getOrder({delivery:orders.delivery}))
   },[orders.delivery])

   useEffect(() => {
     const token=localStorage.getItem("token")
   if(!token){
    Navigate("/LoginPanel")
  }
   },[])

  return (
    <>
    <div className={styles.page}>
       <AdminHeader/>
    <div className={styles.main}>
    <div className={styles.filter}>
        <div className={styles.left}>
        <input  type="radio" className={styles.check} name="deliverystatus"checked={!orders.delivery} onChange={()=>dispatch(setDelivery({delivery:false}))}/>
        <label className={styles.label}> سفارش های در انتظار ارسال </label>
        </div>
        <div className={styles.right}>
        <input  type="radio" className={styles.check} name="deliverystatus" checked={orders.delivery} onChange={()=>dispatch(setDelivery({delivery:true}))}/>
        <label className={styles.label}> سفارش های تحویل شده</label>
        </div>
        </div>
        <OrderTable item={orders.data}/>
    </div>
    </div>
    {orders.openModal && (<OrderModal/>)}
    </>
  )
}

export default AdminPanel;
