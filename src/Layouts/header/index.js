import React, { useState } from 'react'
import styles from "./style.module.css"
import {CiSearch} from "react-icons/ci"
import Navbar from "../../Components/Navbar/index"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header= () => {
  const {products} = useSelector(store => store);
  console.log(products.data)
  const [inputSearch, setInputSearch] = useState("")
  const navigate=useNavigate()
  const handleSearch=(event)=>{
    const data = event.target.value;
        console.log(data)
        setInputSearch(data)
  }

  const showProductPage=(event)=>{
    if(event.keyCode == 13){
      products.data.map((item)=>{
        if(item.name.match(inputSearch)){
            navigate(`/Products/ProductDetail/${item.id}`)
        } 
        else {
          navigate("/NotFound")
        } 
      })
    }
  }

    
  
  
        
  
  return (
    <>
    
   <header className={styles.header}>
    <div className={styles.left}>
    <img src="/img/logo.jpg" className={styles.headerimage}/>
    <div className={styles.search}>
      <CiSearch className={styles.searchIcon}/>
      <input type="search" placeholder='جستجو...' onChange={handleSearch}  onKeyDown={showProductPage}/>
     
    </div>
   
    </div>
    
   <div className={styles.right}>
    <div className={styles.links}>
     <Navbar/> 
   
    </div>
    
    
  </div>
 
   </header>
   <div className={styles.line}></div>
  
    </>
  )
}
export default Header;