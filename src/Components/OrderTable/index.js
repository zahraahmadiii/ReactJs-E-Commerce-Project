import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import { openOrdersModal } from '../../redux/Features/orders-slice';


 const OrderTable= ({item}) => {
  // console.log(item)

  ///pagination////////////////////////////////////////////////////////////
  const orders = useSelector(store => store.ordersSlice);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = orders.data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(orders.data.length / 6);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % orders.data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

    // open order modal///////////////////////////////////////////
    const dispatch=useDispatch()
    const handleOpenOrderModal=(id)=>{
     dispatch(openOrdersModal()) 
    }
  return (
    
        <div className={styles.table}>
        <Table striped  bordered className={styles.border}>
          <thead >
            <tr className={styles.tr}>
              <th className={styles.th}>نام کاربر</th>
              <th className={styles.th}>مجموع مبلغ</th>
              <th className={styles.th}>زمان ثبت سفارش</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
          {currentItems.map((item)=> {
          return(<tr key={item.id} className={styles.tr}>
            <td className={styles.td}>{item.username } {item.lastname} </td>
            <td className={styles.td}>{item.prices}</td>
            <td className={styles.td}>{item.createdAt}</td>
            <td className={styles.td}><p onClick={()=>handleOpenOrderModal(item.id)} className={styles.checkOrder}>بررسی سفارش</p></td>
          </tr>)
         })}
          
           
          </tbody>
        </Table>
        <ReactPaginate 
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="prev"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.pagination__link}
        nextLinkClassName={styles.pagination__link}
        disabledClassName={styles.pagination__link_disabled}
        activeClassName={styles.pagination__link_active}
       className={styles.paginate} />
    </div>
       
      
       
      
      )
    }
  
export default OrderTable;
