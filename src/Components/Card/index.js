import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { useSelector} from 'react-redux'
import { BASE_URL } from '../../Api/Constants';
 const Card = ({item}) => {
console.log(item)
  const {products} = useSelector(store => store);

  return (
    <>
   
        <div  className={styles.wrapperCard}>
         <img src={`${BASE_URL}/files/${item.thumbnail}`}  className={styles.cardImg}/>
         <p className={styles.cardPara}>{item.name}</p>
         <p className={styles.cardPara}>{item.price}</p>
        </div>
 
   
    </>
  )
}
export default Card;