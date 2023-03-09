import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import{BsTrash} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import ReactPaginate from 'react-paginate';
import { useSelector} from 'react-redux'
import { useState } from 'react';
const ProductTable = ({item}) => {
  console.log(item)
  const {products} = useSelector(store => store);
  console.log(products)
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.data.length / 6);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % products.data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
 
  return (
    
    <div className={styles.table}>
    <Table striped size="sm" bordered>
      <thead >
        <tr>
        <th >تصویر</th>
          <th>نام کالا</th>
          <th >دسته بندی</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item)=> {
          return(<tr key={item.id}>
            <td><img src={`${BASE_URL}/files/${item.thumbnail}`} className={styles.img}/></td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td> <BsTrash/> <FaRegEdit/></td>
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
export default ProductTable;