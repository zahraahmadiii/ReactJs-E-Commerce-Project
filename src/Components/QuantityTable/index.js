import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import{BsTrash} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import ReactPaginate from 'react-paginate';
import { useSelector} from 'react-redux'
import { useState } from 'react';

const QuantityTable = () => {
  return (
    <div className={styles.table}>
    <Table striped size="sm" bordered>
      <thead >
        <tr>
        <th >کالا</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      
       
      </tbody>
    </Table>
    
    
    </div>
   
  )
}
export default QuantityTable
