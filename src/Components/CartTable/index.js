import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import{BsTrash} from "react-icons/bs"
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import { addToCart, deleteOrder } from '../../redux/Features/orders-slice';


const CartTable = ({allOrders}) => {

  const orders = useSelector(store => store.ordersSlice);
  const dispatch=useDispatch()
  const handleDeleteOrder=(product)=>{
   let filteredProduct= orders.orderProduct.filter((item) =>  item.id !== product.id)
   dispatch(addToCart(filteredProduct))
  }
    // let localBasket = JSON.parse(localStorage.getItem('basket'))
    // console.log(localBasket) 
  return (
    
    <div className={styles.table}>
    <Table size="sm" bordered className={styles.border}>
      <thead >
        <tr className={styles.tr}>
        <th className={styles.th}>تصویر</th>
          <th className={styles.th}>نام کالا</th>
          <th className={styles.th} >قیمت</th>
          <th className={styles.th}>تعداد</th>
        </tr>
      </thead>
      <tbody>
        {allOrders.map((item)=> {
          return(
            <tr key={item.id} className={styles.tr}>
            <td className={styles.td}> <img src={`${BASE_URL}/files/${item.image}`} className={styles.img}/></td>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.price}</td>
            <td className={styles.td}>{item.count}</td>
            <td className={styles.td}><BsTrash className={styles.trash} onClick={()=>handleDeleteOrder(item)}/></td>
          </tr>)
         })}
       
      </tbody>
    </Table>
    
    </div>
  
   
  
  )
}
export default CartTable;