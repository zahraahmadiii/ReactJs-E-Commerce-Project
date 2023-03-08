import React from 'react'
import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>


    </div>
  )
}
export default ProductTable;