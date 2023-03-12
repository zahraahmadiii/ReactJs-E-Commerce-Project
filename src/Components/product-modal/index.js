import React from 'react'
import styles from "./style.module.css"
import {IoMdCloseCircle} from "react-icons/io"
import Button from '../button'
import CkEditors from "../ckEditors"
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
  <option >دسته بندی را انتخاب کنید</option>
   <option value="لپ تاپ">لپ تاپ</option>
   <option value="تبلت">تبلت</option>
   <option value="موبایل">موبایل</option>
   <option value="ایرپاد">ایرپاد</option>
  </select>

   <div >
    <label className={styles.label}>توضیحات :</label>
    <CkEditors/>
  </div>
    <div className={styles.savebtn}>
    <Button btnColor={" rgb(7 68 199)"}>{"ذخیره"}</Button>
    </div>
    

   </div>
   </div>
   
   </>
  )
}

export default ProductModal;
