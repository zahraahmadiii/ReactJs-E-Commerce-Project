import React from 'react'
import styles from "./style.module.css"
 const Button = ({title,children,btnColor,type,onClick}) => {
  return (
    <button className={styles.btn} title={title} type={type} style={{ backgroundColor: btnColor }} onClick={onClick}>{children}</button>
  )
}
export default Button;