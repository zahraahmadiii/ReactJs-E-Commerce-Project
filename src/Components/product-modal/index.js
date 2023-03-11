import React from 'react'
import styles from "./style.module.css"
import {IoMdCloseCircle} from "react-icons/io"
import Button from '../button'
 const ProductModal = () => {
  return (
   <>
   <div className={styles.wraper_modal}>
   <div className={styles.modal}>
    <div className={styles.top}>
    <p>افزودن/ویرایش کالا</p>
    <IoMdCloseCircle className={styles.close}/>
    </div>
   
    <label className={styles.label}>تصویرکالا :</label>
    <input type="file" className={styles.file}/>
    <label className={styles.label}>نام کالا :</label>
    <input type="text" className={styles.file}/>
    <label className={styles.label}>دسته بندی:</label>
    <select className={styles.select} >
  <option value="someOption">دسته بندی را انتخاب کنید</option>
   <option value="someOption">لپ تاپ</option>
   <option value="otherOption">تبلت</option>
   <option value="otherOption">موبایل</option>
   <option value="otherOption">ایرپاد</option>
  </select>

   <div >
    <label className={styles.label}>توضیحات :</label>
  </div>
   
    <Button btnColor={" rgb(7 68 199)"} className={styles.save}>{"ذخیره"}</Button>
   </div>
   </div>
   
   </>
  )
}

export default ProductModal;
