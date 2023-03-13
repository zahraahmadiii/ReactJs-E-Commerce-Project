import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import ReactPaginate from 'react-paginate';
import { useSelector} from 'react-redux'
import { useState } from 'react';


 const OrderTable= ({item}) => {
  console.log(item)
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
  return (
    
        <div className={styles.table}>
        <Table striped size="sm" bordered className={styles.border}>
          <thead >
            <tr className={styles.border}>
              <th className={styles.th}>نام کاربر</th>
              <th className={styles.th}>مجموع مبلغ</th>
              <th className={styles.th}>زمان ثبت سفارش</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
          {currentItems.map((item)=> {
          return(<tr key={item.id} className={styles.border}>
            <td>{item.username } {item.lastname} </td>
            <td>{item.prices}</td>
            <td>{item.createdAt}</td>
            <td><a>بررسی سفارش</a> </td>
          </tr>)
         })}
          
           
          </tbody>
        </Table>
        <ReactPaginate 
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
       className={styles.paginate} />
    </div>
       
      
       
      
      )
    }
  
export default OrderTable;