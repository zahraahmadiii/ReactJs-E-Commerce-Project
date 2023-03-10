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


 const orderTable= () => {
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
          
           <tr>
                <td><img src={""} className={styles.img}/></td>
                <td></td>
                <td></td>
                <td> <BsTrash/> <FaRegEdit/></td>
              </tr>
          
           
          </tbody>
        </Table>
        
       
        </div>
       
      
      )
    }
  
export default orderTable;
