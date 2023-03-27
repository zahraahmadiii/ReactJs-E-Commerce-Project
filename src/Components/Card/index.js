import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { useSelector} from 'react-redux'
import { BASE_URL } from '../../Api/Constants';
 const Card = ({item}) => {
console.log(item)
  const {products} = useSelector(store => store);

  return (
    <>
    {item.map((obj)=>{
      return(
        <div key={obj.id} className={styles.wrapperCard}>
         <img src={`${BASE_URL}/files/${obj.thumbnail}`}  className={styles.cardImg}/>
         <p className={styles.cardPara}>{obj.name}</p>
         <p className={styles.cardPara}>{obj.price}</p>
        </div>
          )
     })}
    
   
   
 
  
    
   
    </>
  )
}
export default Card;