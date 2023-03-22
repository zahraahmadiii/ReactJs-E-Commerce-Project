import React from 'react'
import styles from "./style.module.css"
import {IoMdCloseCircle} from "react-icons/io"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../button';

const OrderModal = () => {
  return (
   <>
   <div className={styles.wrapper_orderModal}>
    <div className={styles.modal} >
      <div className={styles.top}>
        <p className={styles.para}>سفارشات مشتری</p>
        <IoMdCloseCircle className={styles.close}/>
       </div>
       <div className={styles.middle}>
        <div className={styles.data}>
        <label className={styles.lable}>نام مشتری :</label>
        <p> </p>
        </div>
        <div className={styles.data}>
        <label className={styles.lable}>آدرس:</label>
        <p></p>
        </div>
       <div className={styles.data}>
       <label className={styles.lable}>تلفن:</label>
        <p></p>
       </div>
       <div className={styles.data}>
       <label className={styles.lable}>زمان تحویل:</label>
        <p></p>
       </div>
       <div className={styles.data}>
       <label className={styles.lable}>زمان سفارش:</label>
        <p></p>
       </div>
       
       </div>
       <div className={styles.bottom}>
       <Table size="sm" bordered className={styles.bordertable}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>کالا</th>
          <th className={styles.th}>قیمت</th>
          <th className={styles.th} >تعداد</th>
        </tr>
      </thead>
      <tbody>
  
          <tr className={styles.tr}>
          <td className={styles.td}></td>
          <td className={styles.td}></td>
          <td className={styles.td}></td>
          </tr>
        
       
      </tbody>
    </Table>
       </div>
       <div  className={styles.bottom}>
       <Button btnColor={" rgb(7 68 199)"}>{"تحویل شد"}</Button>
       </div>
    
    </div>
   </div>
   </>
  )
}
export default OrderModal;
