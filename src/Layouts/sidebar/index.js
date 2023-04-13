import React from 'react'
import styles from "./style.module.css"
export const Sidbar = () => {
  return (
    <>
     <div className={styles.line}></div>
      <div className={styles.sidebar}>
        <div className={styles.filter}>
        <label className={styles.Label}>فیلتر براساس :</label>
        <select className={styles.select} >
        <option></option>
        <option value="لپ تاپ">ارزان ترین</option>
        <option value="تبلت">گران ترین</option>
        <option value="موبایل">جدیدترین</option>
        <option value="ایرپاد">پرفروش ترین</option>
      </select>
        </div>
          
      </div>
     
    </>
  )
}
export default Sidbar;