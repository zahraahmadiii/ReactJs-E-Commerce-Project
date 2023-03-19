import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import{BsTrash} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import {OpenDeleteModal, OpenEditModal} from '../../redux/Features/products-slice.js';

const ProductTable = ({item}) => {
  const {products} = useSelector(store => store);
 

  const dispatch=useDispatch()
  const handelDeleteProduct=(id)=>{
    // console.log(id)
   dispatch(OpenDeleteModal(id))
}
const handelEditProduct=(id)=>{
  dispatch(OpenEditModal(id))
}
  

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 5;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.data.length / 5);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % products.data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
 
  return (
    
    <div className={styles.table}>
    <Table size="sm" bordered className={styles.border}>
      <thead >
        <tr className={styles.tr}>
        <th className={styles.th}>تصویر</th>
          <th className={styles.th}>نام کالا</th>
          <th className={styles.th} >دسته بندی</th>
          <th className={styles.th}></th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item)=> {
          return(
            <tr key={item.id} className={styles.tr}>
            <td className={styles.td}><img src={`${BASE_URL}/files/${item.thumbnail}`} className={styles.img}/></td>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.category}</td>
            <td className={styles.td}> <BsTrash className={styles.trash} onClick={()=>handelDeleteProduct(item.id)}/> <FaRegEdit className={styles.edit} onClick={()=>handelEditProduct(item.id)}/></td>
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
       className={styles.paginate}
        />
    </div>
  
   
  
  )
}
export default ProductTable;