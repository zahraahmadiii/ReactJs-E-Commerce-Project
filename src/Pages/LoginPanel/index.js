import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LoginPanel = () => {

  const schema = yup.object().shape({
    userName:yup.string().required("نام کاربری الزامی است"),
    passWord:yup.string().min(4).max(15).required("پسوورد را وارد کنید"),
  })

  const {
    register,
    handleSubmit,
    errors} = useForm({ resolver:yupResolver(schema) })
   
  


const submitForm=(data)=>{
  console.log(data)
}
  
  return (
    < >
      <div className={styles.wraper}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <img src="/img/logo.jpg"  className={styles.logo}/>
        
         <label> نام کاربری:  </label>
          <input type="text" name="userName" className={styles.input} ref={register} />
          <p>{errors.userName?.message}</p>

         <label>   رمزعبور:  </label>
          <input type="text" name="passWord" className={styles.input} ref={register}/>
          <p>{errors.passWord?.message}</p>

          <div className={styles.btn}>
          <Link to="/LoginPanel/AdminPanel"><Button btnColor={"blue"} type={"submit"}>{"ورود"}</Button></Link>
          <Link to="/"><Button btnColor={"gray"}>{"بازگشت"}</Button></Link>
          </div>
      </form>
      </div>
    </>
  )
}
export default LoginPanel;