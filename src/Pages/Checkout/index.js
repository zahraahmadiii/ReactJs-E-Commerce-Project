import React, { useState } from 'react'
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/button';
import Header from '../../Layouts/header';
import * as yup from "yup";
import { useForm,Controller} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
const CheckOut = () => {

  const schema = yup.object({
    username:yup.string().required("نام خود را وارد کنید"),
    lastname:yup.string().required("نام خانوادگی را وارد کنید"),
    address:yup.string().required("آدرس الزامی است"),
    phone: yup.string().required("شماره تلفن الزامی است").max(11,"شماره درست نیست").min(11,"شماره درست نیست"),
   expectAt:yup.string().required("زمان تحویل الزامی است"), 
  })

  const {
    register,
    handleSubmit,
    control,
   formState:{errors} } = useForm({ resolver:yupResolver(schema),mode:"onChange" })

   const navigate=useNavigate()

   const submitData =(data)=>{
    console.log(data)
    const customerData = JSON.parse(localStorage.getItem('customerData') || '[]');
    localStorage.setItem('customerData', JSON.stringify(data)); 
      navigate("/Cart/CheckOut/Payment")  

  }
  return (
    <>
     <Header/>
     <div className={styles.PayPage}>
      
     <form className={styles.form} onSubmit={handleSubmit(submitData)}>

         <label>نام : </label>
          <input type="text" name="username" className={styles.input} {...register("username")} />
          <p className={styles.para}>{errors.username?.message}</p>

         <label> نام خانوادگی : </label>
          <input type="text" name="lastname" className={styles.input} {...register("lastname")}/>
          <p className={styles.para}>{errors.lastname?.message}</p>

          <label> آدرس:</label>
          <input type="text" name="address" className={styles.input} {...register("address")}/>
          <p className={styles.para}>{errors.address?.message}</p>

          <label> تلفن همراه :</label>
          <input type="text" name="phone" className={styles.input} {...register("phone")}/>
          <p className={styles.para}>{errors.phone?.message}</p>  
            
            <label> تاریخ تحویل: </label>
           <Controller
          control={control}
          name="expectAt"
          rules={{ required: true }} 
          render={({
            field: { onChange, name, value },
            fieldState: { invalid, isDirty }, 
            formState: { errors }, 
          }) => (
            <>
              <DatePicker
                value={value || ""}
                onChange={(date) => {
                  onChange(date?.isValid ? date.format() : "");
                }}
                calendar={persian}
                locale={persian_fa}
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  border:"none" ,
                  height: "28px"
                }}
                containerStyle={{
                  width: "98%"
                }}
              />
                <p className={styles.para}>{errors.expectAt?.message}</p>
            </>
          )}
        />
      
          <div className={styles.btn}>
         <Button type={"submit"} btnColor={" rgb(7 68 199)"}>{"پرداخت"} </Button>
          </div>
      </form>
    </div>
    </>
   
  )
}
export default CheckOut;