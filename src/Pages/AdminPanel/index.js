import styles from "./style.module.css"
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import React, { useEffect } from 'react'
import OrderTable from "../../Components/OrderTable/index.js";
import {useDispatch, useSelector} from 'react-redux'
import { getOrder, setDelivery } from '../../redux/Features/orders-slice.js';
 const AdminPanel = () => {

  const orders = useSelector(store => store.ordersSlice);
  console.log(orders)

   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getOrder({delivery:orders.delivery}))
   },[orders.delivery])

   

  return (
    <div className={styles.page}>
       <AdminHeader/>
    <div className={styles.main}>
    <div className={styles.filter}>
        
        <input  type="radio" className={styles.check} name="deliverystatus"checked={!orders.delivery} onChange={()=>dispatch(setDelivery({delivery:false}))}/>
        <label className={styles.label}> سفارش های در انتظار ارسال </label>
        <input  type="radio" className={styles.check} name="deliverystatus" checked={orders.delivery} onChange={()=>dispatch(setDelivery({delivery:true}))}/>
        <label className={styles.label}> سفارش های تحویل شده</label>
        </div>
 
        <OrderTable item={orders.data}/>
    </div>
      
     

    
    </div>

  )
}

export default AdminPanel;
