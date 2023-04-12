import React from 'react'
import styles from "./style.module.css"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
 const NotFound = () => {
  const navigate=useNavigate()
  const backToHome=()=>{
    navigate("/")
  }
  return (
    <>
    <div className={styles.wrapper}>
    <BsFillArrowLeftCircleFill className={styles.NotFound} onClick={backToHome}/>
    <p className={styles.NotFound}>NotFound</p>
      </div>
    </>
    
  )
}

export default NotFound;
