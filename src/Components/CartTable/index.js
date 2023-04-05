import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import{BsTrash} from "react-icons/bs"
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';


const CartTable = () => {
    const orders = useSelector(store => store.ordersSlice);
    console.log(orders.orderProduct)
    // const basket =  JSON.parse(localStorage.getItem("basket"));
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
        {orders.orderProduct.map((item)=> {
          return(
            <tr key={item.id} className={styles.tr}>
            <td className={styles.td}> <img src={`${BASE_URL}/files/${item.image}`} className={styles.img}/></td>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.price}</td>
            <td className={styles.td}>{item.count}</td>
          </tr>)
         })}
       
      </tbody>
    </Table>
    
    </div>
  
   
  
  )
}
export default CartTable;