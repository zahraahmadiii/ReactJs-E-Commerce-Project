import React, { useEffect } from 'react'
import styles from "./style.module.css"
import {IoMdCloseCircle} from "react-icons/io"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../button';
import { useDispatch, useSelector} from 'react-redux'
import { closeOrdersModal, deliverOrder } from '../../redux/Features/orders-slice';
import { fetchCustomerData } from '../../Api/Servises/getCustomersOrder';
import { updateDelivery } from '../../Api/Servises/updateDelivery';
import { ToastContainer ,toast} from 'react-toastify';
const OrderModal = () => {

  const orders = useSelector(store => store.ordersSlice);
  // console.log(orders)

  const dispatch=useDispatch()
  useEffect(()=>{
    fetchCustomerData(orders.orderId)
   },[dispatch])

 
  const handleCloseMOdal=()=>{
    dispatch(closeOrdersModal()) 
  }
  const handleDeliverOrder= (id)=>{
    try{
      const newDeliver={
        id:id,
        delivered:true,
       }
        updateDelivery(newDeliver)
        dispatch(closeOrdersModal()) 
        // dispatch(deliverOrder(true)) 
        toast.success('سفارش با موفقیت ارسال شد')
    }catch(error){
      toast.error("سفارش ارسال نشد");
    }
   
  }
  return (
   <>
   <div className={styles.wrapper_orderModal}>
   <ToastContainer/>
    <div className={styles.modal} >
      <div className={styles.top}>
        <p className={styles.para}>سفارشات مشتری</p>
        <IoMdCloseCircle className={styles.close} onClick={()=>handleCloseMOdal()}/>
       </div>
       {orders.data.map((item)=>{
        if(item.id == orders.orderId){
          return(
            <>
            <div  className={styles.middle}>
            <div className={styles.data}>
            <label className={styles.lable}>نام مشتری :</label>
            <p>{item.username} {item.lastname}</p>
            </div>
            <div className={styles.data}>
            <label className={styles.lable}>آدرس:</label>
            <p>{item.address}</p>
            </div>
           <div className={styles.data}>
           <label className={styles.lable}>تلفن:</label>
            <p>{item.phone}</p>
           </div>
           <div className={styles.data}>
           <label className={styles.lable}>زمان تحویل:</label>
            <p>{item.expectAt}</p>
           </div>
           <div className={styles.data}>
           <label className={styles.lable}>زمان سفارش:</label>
            <p>{item.createdAt}</p>
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
 
        { item.products.map((item)=>{
            return(
                <tr key={item.id} className={styles.tr}>
                 <td className={styles.td}>{item.name}</td>
                 <td className={styles.td}>{item.price}</td>
                 <td className={styles.td}>{item.count}</td>
               </tr>
               )
            })
         }
  
      </tbody>
     </Table>
        </div>
      <div  className={styles.bottom}>
         {orders.delivery ?
           <p>زمان تحویل :{item.expectAt} </p> :
          <Button btnColor={" rgb(7 68 199)"} onClick={()=>handleDeliverOrder(item.id)}  >{"تحویل شد"}</Button>}
      
       </div>
    </>
          )
        }
       })}

       {/* <div  className={styles.bottom}>
        {orders.delivery ?
        <p>زمان تحویل : </p> :
         <Button btnColor={" rgb(7 68 199)"} onClick={()=>handleDeliverOrder()}  >{"تحویل شد"}</Button>}
      
       </div> */}
    </div>
   </div>
   </>
  )
}
export default OrderModal;
