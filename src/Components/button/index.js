import React from 'react'
import styles from "./style.module.css"
 const Button = ({title,children,btnColor}) => {
  return (
    <button className={styles.btn} title={title}  style={{ backgroundColor: btnColor }}>{children}</button>
  )
}
export default Button;