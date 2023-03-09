import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../Api/Constants';
import{BsTrash} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"

const ProductTable = ({item}) => {
  console.log(item)
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
        {item.map((item)=> {
          return(<tr key={item.id}>
            <td><img src={`${BASE_URL}/files/${item.thumbnail}`}/></td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td> <BsTrash/> <FaRegEdit/></td>
          </tr>)
         })}
       
      </tbody>
    </Table>


    </div>
  )
}
export default ProductTable;