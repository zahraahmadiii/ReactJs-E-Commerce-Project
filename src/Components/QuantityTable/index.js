import styles from "./style.module.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector} from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import { editPrice, editQuantity, getNewPrice, getNewQuantity } from "../../redux/Features/products-slice";

const QuantityTable = ({item}) => {
    // console.log(item)
//handle change price and quantity in table///////////////////////////
    const [price, setPrice] = useState(false);
    const [quantity,setQuantity]= useState(false);
    // const [editprice,setEditprice]=useState();
    // const [editIdprice,setEditIdprice]=useState();
    // const [editQty,setQty]=useState();
    // const [editIdQuantity,setEditIdQuantity]=useState();
    const [test,setTest]=useState([]);
    const dispatch=useDispatch()
    
    const clickToChangePrice=(id)=>{
      // console.log(id)
      dispatch(editPrice(id))
      setPrice(true)
    }
    const handleChangePrice=(event,id)=>{
    // console.log(event)
    dispatch(getNewPrice({price:event,id:id}))
    }
    const onBlurInputPrice=(event,id)=>{
      // console.log(event)
    //  setEditprice(event)
    //  setEditIdprice(id)
     setPrice(false)
     const editeditemTest=test.find((item)=> item.id==id)
     if(!editeditemTest){
      const obj={
        id:id,
        price:event,
      }
      setTest([...test,obj])
     }else{
      const temp=[...test]
      const editIndex=temp.indexOf(editeditemTest)
      editeditemTest.price=event
       temp.splice(editIndex,1,editeditemTest)
       setTest(temp)
     }
    }
    const onBlurInputQuantity=(event,id)=>{
      console.log(event)
    //  setQty(event)
    //  setEditIdQuantity(id)
    //  setPrice(false)
     setQuantity(false)
     const editeditemTest=test.find((item)=> item.id==id)
     if(!editeditemTest){
      const obj={
        id:id,
        qty:event,
      }
      setTest([...test,obj])
     }else{
      const temp=[...test]
      const editIndex=temp.indexOf(editeditemTest)
      editeditemTest.qty=event
       temp.splice(editIndex,1,editeditemTest)
       setTest(temp)
     }
    }

    const findInEdited=(id)=>{
      return  test.find((product)=> product.id==id )
    }
  
    const clickToChangeQuantity =(id)=>{
      // console.log(id)
      dispatch(editQuantity(id))
      setQuantity(true)
    }
    const handleChangeQuantity=(event,id)=>{
    dispatch(getNewQuantity({quantity:event,id:id}))
    } 
// pagination ///////////////////////////////////////////////////////
    const {products} = useSelector(store => store);
    // console.log(products.productId)
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 6;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.data.length / 6);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 6) % products.data.length;
      // console.log(
      //   `User requested page number ${event.selected}, which is offset ${newOffset}`
      // );
      setItemOffset(newOffset);
    };

    // ////////////////////////////////////////////////////////////////////////
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
          return(
            <tr key={item.id}  className={styles.tr}>
            <td className={styles.td}>{item.name}</td>

           <td className={styles.td} key={item.id}> 
           { price && products.productId==item.id?
           <input price={item.price} onChange={(event)=>handleChangePrice(event.target.value,item.id)} onBlur={(event)=>onBlurInputPrice(event.target.value,item.id)} className={styles.Input} /> :

            <span onClick={()=>clickToChangePrice(item.id)}>{ findInEdited(item.id) && findInEdited(item.id).price ? findInEdited(item.id).price :item.price}</span>}
           </td>

            <td className={styles.td}>
            { quantity && products.productId==item.id?
            <input  price={item.quantity} onChange={(event)=>handleChangeQuantity(event.target.value,item.id)} onBlur={(event)=>onBlurInputQuantity(event.target.value,item.id)} className={styles.Input}/> :

            <span onClick={()=>clickToChangeQuantity(item.id)}>{ findInEdited(item.id) && findInEdited(item.id).qty ? findInEdited(item.id).qty :item.quantity}</span>}
              </td>
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
