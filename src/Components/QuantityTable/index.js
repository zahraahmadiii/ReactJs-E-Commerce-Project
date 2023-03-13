import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { useSelector} from 'react-redux'
import { useState } from 'react';

const QuantityTable = ({item}) => {
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
    <Table striped  bordered className={styles.border}>
      <thead >
        <tr  className={styles.tr}>
        <th className={styles.th}>کالا</th>
          <th className={styles.th}>قیمت</th>
          <th className={styles.th}>موجودی</th>
        </tr>
      </thead>
      <tbody>
      {currentItems.map((item)=> {
          return(<tr key={item.id}  className={styles.tr}>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.price}</td>
            <td className={styles.td}>{item.quantity}</td>
          </tr >)
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
export default QuantityTable
