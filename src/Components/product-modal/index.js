import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {IoMdCloseCircle} from "react-icons/io"
import Button from '../button'
import CkEditors from "../ckEditors"
import {useDispatch, useSelector} from 'react-redux'
import {closeEditModal, closeModal, getProduct} from '../../redux/Features/products-slice.js'
import { postProducts, uploadImage } from '../../Api/Servises/postProduct';
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProducts } from '../../Api/Servises/updateProduct';

 const ProductModal = () => {

  const {products} = useSelector(store => store);

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
    reset,
    handleSubmit,
   formState:{errors} } = useForm({ resolver:yupResolver(schema),mode:"onChange" })
   
   const dispatch=useDispatch()

   const handleUploadImage=async(img)=>{
    console.log(img)
    let formData=new FormData()
    formData.append("image",img);
    const res =await uploadImage(formData);
    return res.data.filename
   }
   useEffect(()=>{
    if(products.openModalEdit){
     reset(products.editedProduct)
    }
   },[])

  const submitForm=async(data)=>{
    if(products.openModalAdd){
      try{
        console.log(data)
        const thumbnail =await handleUploadImage(data.thumbnail[0]);
        const image1= await handleUploadImage (data.images[0]);
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
          dispatch(getProduct())
          dispatch(closeModal())
          toast.success('محصول با موفقیت اضافه شد');
          // console.log(newProduct)
       }catch(error){
        toast.error("محصول اضافه نشد");
      }
    }else if(products.openModalEdit){
      try{
        const thumbnail =await handleUploadImage(data.thumbnail[0]);
        let image1= await handleUploadImage (data.images[0]);
        let image2= await handleUploadImage(data.images[1]);
        if(!image1 ){
          image1=products.editedProduct.images[0]
        }
        if(!image2 ){
          image2=products.editedProduct.images[1]
        }
        const editedProduct={
          id:products.editedProduct.id,
          name:data.name,
          thumbnail: thumbnail,
          images:[image1,image2],
          brand:data.brand,
          quantity:data.quantity,
          price:data.price,
          category:data.category,
          description:data.description
        } 
        // console.log(editedProduct)
         updateProducts(editedProduct) 
          dispatch(getProduct())
          dispatch(closeEditModal())
          toast.success('ویرایش محصول با موفقیت انجام شد');
         }catch(error){
          toast.error("ویرایش محصول انجام نشد");
         }
    }
  } 
    

  const handleCloseModal=()=>{
   dispatch(closeModal())
   dispatch(closeEditModal())
  }

  return(
   <>
   <div className={styles.wraper_modal}>
    // <ToastContainer/>
     <form className={styles.modal} onSubmit={handleSubmit(submitForm)}>
       <div className={styles.top}>
      <p>افزودن/ویرایش کالا</p>
       <IoMdCloseCircle className={styles.close} onClick={()=>handleCloseModal()}/>
    </div>
      <div className={styles.row}>
      <div className={styles.items} >
      <label className={styles.Label}>نام کالا :</label>
      <input type="text" className={styles.file} {...register("name")}/>
     <p className={styles.para}>{errors.name?.message}</p>
    </div>
    <div className={styles.items}>
      <label className={styles.Label}>برند کالا:</label>
      <input type="text" className={styles.file} {...register("brand")}/>
      <p className={styles.para}>{errors.brand?.message}</p>
      </div>
    </div>
    
    <div className={styles.row}>
    <div className={styles.items}>
     <label className={styles.Label}>تصویرکالا :</label>
     <input type="file" className={styles.file} {...register("thumbnail")}/>
     <p className={styles.para}>{errors.thumbnail?.message}</p>
    </div>
    <div className={styles.items}>
     <label className={styles.Label}>لیست تصاویرکالا:</label>
     <input type="file" className={styles.file} {...register("images")} multiple/>
     <p className={styles.para}>{errors.images?.message}</p>
    </div>
    </div>
     <div className={styles.row}>
      <div className={styles.items}>
       <label className={styles.Label}>تعداد:</label>
       <input type="text" className={styles.file} {...register("quantity")}/>
       <p className={styles.para}>{errors.quantity?.message}</p>
      </div>
      <div className={styles.items}>
       <label className={styles.Label}>قیمت:</label>
       <input type="text" className={styles.file} {...register("price")}/>
       <p className={styles.para}>{errors.price?.message}</p>
      </div>
     </div>
    
    <div>
    <label className={styles.Label}>دسته بندی:</label>
    <select className={styles.select}  {...register("category")}>
     <option></option>
     <option value="لپ تاپ">لپ تاپ</option>
     <option value="تبلت">تبلت</option>
     <option value="موبایل">موبایل</option>
     <option value="ایرپاد">ایرپاد</option>
   </select>
     <p className={styles.para}>{errors.category?.message}</p>
    </div>
  
    <div>
    <label className={styles.Label}>توضیحات :</label>
    {/* <CkEditors {...register("description")}/> */}
     <textarea className={styles.textarea} {...register("description")}/>
     <p className={styles.para}>{errors.description?.message}</p>
    </div>
    <div className={styles.savebtn}>

      {products.openModalEdit ?
        <Button btnColor={"gray"} type={"submit"} >{"ویرایش"}</Button>:
        <Button btnColor={" rgb(7 68 199)"} type={"submit"}>{"ذخیره"}</Button>}
    </div>
   </form>
   </div>
   
   </>
  )
}

export default ProductModal;
