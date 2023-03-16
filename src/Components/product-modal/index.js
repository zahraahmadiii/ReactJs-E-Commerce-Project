import React from 'react'
import styles from "./style.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {IoMdCloseCircle} from "react-icons/io"
import { useEffect } from 'react'
import Button from '../button'
import CkEditors from "../ckEditors"
import {useDispatch, useSelector} from 'react-redux'
import {closeModal} from '../../redux/Features/products-slice.js'
import { postProduct } from '../../redux/Features/products-slice.js';
import { postProducts, uploadImage } from '../../Api/Servises/postProduct';
 const ProductModal = () => {

  const {products} = useSelector(store => store);
  // console.log(products)
  
  const schema = yup.object({
    thumbnail:yup
    .mixed()
    .test(
    "fileNumber",
    "وارد کردن تصویر الزامی می باشد.",
    (files) =>
    !files || // Check if `files` is defined
    files.length > 0 // Check if `files` has attachment
    ),
    images:yup
    .mixed()
    .test(
    "fileNumber",
    "وارد کردن تصاویر الزامی می باشد.",
    (files) =>
    !files || // Check if `files` is defined
    files.length ===2 // Check if `files` has attachment
    ),
    name:yup.string().required("نام کالا را وارد کنید"),
    brand:yup.string().required("برند کالا را وارد کنید"),
    quantity:yup.string().required("تعداد کالا را وارد کنید"),
    price:yup.string().required("قیمت کالا را وارد کنید"),
    category:yup.string().required("دسته بندی را انتخاب کنید"),
    description:yup.string().required("جزئیات را وارد کنید")
  })

  const {
    register,
    handleSubmit,
   formState:{errors} } = useForm({ resolver:yupResolver(schema),mode:"onChange" })
   
   const dispatch=useDispatch()


   const handleUploadImage=async(img)=>{
    let formData=new FormData()
    formData.append("image",img);
    const res =await uploadImage(formData);
    return res.data.filename
   }

  const submitForm=async(data)=>{
    console.log(data)
    // let formData=new FormData()
    // console.log(data.thumbnail)
    // formData.append("image",data.thumbnail[0]);
    // const thumbnail =await uploadImage(formData);
   const thumbnail =await handleUploadImage(data.thumbnail[0]);
    // formData.append("images",data.images[0]);
    const image1= await handleUploadImage (data.images[0]);
    // formData.append("images",data.images[1]);
    const image2= await handleUploadImage(data.images[1]);
    const newProduct={
      name:data.name,
      thumbnail: thumbnail,
      images:[image1,image2],
      brand:data.brand,
      quantity:data.quantity,
      price:data.price,
      category:data.category,
      description:data.description
    }
    postProducts(newProduct)
    // console.log(newProduct)
 }


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
    <div className={styles.row}>
    <div className={styles.items} >
    <label className={styles.label}>نام کالا :</label>
    <input type="text" className={styles.file} {...register("name")}/>
    <p className={styles.para}>{errors.name?.message}</p>
    </div>
    <div className={styles.items}>
    <label className={styles.label}>برند کالا:</label>
    <input type="text" className={styles.file} {...register("brand")}/>
    <p className={styles.para}>{errors.brand?.message}</p>
    </div>
    </div>
    
  <div className={styles.row}>
  <div className={styles.items}>
    <label className={styles.label}>تصویرکالا :</label>
    <input type="file" className={styles.file} {...register("thumbnail")}/>
    <p className={styles.para}>{errors.thumbnail?.message}</p>
  </div>
  <div className={styles.items}>
   <label className={styles.label}>لیست تصاویرکالا:</label>
    <input type="file" className={styles.file} {...register("images")} multiple/>
    <p className={styles.para}>{errors.images?.message}</p>
  </div>
   </div>
     <div className={styles.row}>
      <div className={styles.items}>
      <label className={styles.label}>تعداد:</label>
      <input type="text" className={styles.file} {...register("quantity")}/>
      <p className={styles.para}>{errors.quantity?.message}</p>
      </div>
      <div className={styles.items}>
       <label className={styles.label}>قیمت:</label>
      <input type="text" className={styles.file} {...register("price")}/>
      <p className={styles.para}>{errors.price?.message}</p>
      </div>
     </div>
    
 
  
    <div>
    <label className={styles.label}>دسته بندی:</label>
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
    {/* <CkEditors {...register("description")}/> */}
    <textarea className={styles.textarea} {...register("description")}/>
    <p className={styles.para}>{errors.description?.message}</p>
   </div>
    <div className={styles.savebtn}>
    <Button  btnColor={" rgb(7 68 199)"} type={"submit"}>{"ذخیره"}</Button>
    </div>
   </form>
   </div>
   
   </>
  )
}

export default ProductModal;
