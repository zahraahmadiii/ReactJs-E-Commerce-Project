import React from 'react'
import styles from "./style.module.css"
 const Button = ({title,children,btnColor,type}) => {
  return (
    <button className={styles.btn} title={title} type={type} style={{ backgroundColor: btnColor }}>{children}</button>
  )
}
export default Button;