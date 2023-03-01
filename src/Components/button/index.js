import React from 'react'
import styles from "./style.module.css"
 const Button = ({title,children}) => {
  return (
    <button className={styles.btn} title={title}>{children}</button>
  )
}
export default Button;