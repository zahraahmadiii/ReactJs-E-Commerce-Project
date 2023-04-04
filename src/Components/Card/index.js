import React from 'react'
import styles from "./style.module.css"
import { useDispatch, useSelector} from 'react-redux'
import { BASE_URL } from '../../Api/Constants';
import { useSearchParams ,useNavigate} from 'react-router-dom';
import { showProductDetail } from '../../redux/Features/products-slice';
 const Card = ({item}) => {
// console.log(item)
  const {products} = useSelector(store => store);
  const [searchParams] = useSearchParams();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleShowDetails=(id)=>{
   dispatch(showProductDetail(id)) 
   navigate(`/Products/ProductDetail/${id}`)
  }

  return (
    <>
        <div  className={styles.wrapperCard} onClick={()=>handleShowDetails(item.id)}>
         <img src={`${BASE_URL}/files/${item.thumbnail}`}  className={styles.cardImg}/>
         <div  className={styles.wrapperData}>
          <p className={styles.cardPara}>{item.name}</p>
          <p className={styles.cardPara}>{item.price}</p>
         </div>
       
        </div>
    </>
  )
}
export default Card;