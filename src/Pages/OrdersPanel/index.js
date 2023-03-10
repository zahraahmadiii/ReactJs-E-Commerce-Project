import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
// import React, { useEffect } from 'react'
// import OrderTable from "../../Components/OrderTable/index.js";
// import {useDispatch, useSelector} from 'react-redux'
// import { getOrder } from '../../redux/Features/orders-slice.js';

 const OrdersPanel = () => {
  // const {orders} = useSelector(store => store);
  // console.log(orders)

  //  const dispatch=useDispatch()

  //  useEffect(()=>{
  //   dispatch(getOrder())
  //  },[dispatch])

  return (
    <>
    <AdminHeader/>
     <div>
      {/* <OrderTable/> */}
     {/* <orderTable item={orders.data}/> */}
     </div>

    </>
   
  )
}
export default OrdersPanel;
