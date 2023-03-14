import React from 'react'
import styles from "./style.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {IoMdCloseCircle} from "react-icons/io"
import Button from '../button'
import CkEditors from "../ckEditors"
import {useDispatch, useSelector} from 'react-redux'
import {closeModal} from '../../redux/Features/products-slice.js';
 const ProductModal = () => {

  const schema = yup.object({
    productPic:yup.mixed().required("تصویرکالا را وارد کنید"),
    productName:yup.string().required("نام کالا را وارد کنید"),
    category:yup.string().required("دسته بندی را انتخاب کنید"),
  })

  const {
    register,
    handleSubmit,
   formState:{errors} } = useForm({ resolver:yupResolver(schema),mode:"onChange" })
   
  

// const navigate=useNavigate()

const submitForm=(data)=>{
  // navigate("/LoginPanel/AdminPanel")
  console.log(data)
}
  // const {products} = useSelector(store => store);
  const dispatch=useDispatch()

  const handleCloseModal=()=>{
   dispatch(closeModal())
  }

  return (
   <>
   <div className={styles.wraper_modal}>
   <form className={styles.modal}  onSubmit={handleSubmit(submitForm)}>
    <div className={styles.top}>
    <p>افزودن/ویرایش کالا</p>
    <IoMdCloseCircle className={styles.close} onClick={()=>handleCloseModal()}/>
    </div>
   
    <label className={styles.label}>تصویرکالا :</label>
    <input type="file" className={styles.file} {...register("productPic")}/>
    <p className={styles.para}>{errors.productPic?.message}</p>
    <label className={styles.label}>نام کالا :</label>
    <input type="text" className={styles.file} {...register("productName")}/>
    <p className={styles.para}>{errors.productName?.message}</p>
    <label className={styles.label}>دسته بندی:</label>
    <div>
    <select className={styles.select}  {...register("category")}>
    <option ></option>
    <option value="لپ تاپ">لپ تاپ</option>
    <option value="تبلت">تبلت</option>
    <option value="موبایل">موبایل</option>
    <option value="ایرپاد">ایرپاد</option>
   </select>
   <p className={styles.para}>{errors.category?.message}</p>
    </div>
    
    <div >
    <label className={styles.label}>توضیحات :</label>
    <CkEditors/>
   </div>
    <div className={styles.savebtn}>
    <Button btnColor={" rgb(7 68 199)"} type={"submit"}>{"ذخیره"}</Button>
    </div>
   </form>
   </div>
   
   </>
  )
}

export default ProductModal;
