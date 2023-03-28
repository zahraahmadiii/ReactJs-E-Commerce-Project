import React from 'react'
import styles from "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { loginService } from '../../Api/Servises/auth';
import Cookies from "js-cookie";
const LoginPanel = () => {

  const schema = yup.object({
    userName:yup.string().required("نام کاربری الزامی است"),
    passWord:yup.string().required("رمزعبور را وارد کنید"),
  })

  const {
    register,
    handleSubmit,
   formState:{errors} } = useForm({ resolver:yupResolver(schema),mode:"onChange" })
   
  

const navigate=useNavigate()

const submitForm= async(data)=>{
  try {
    const res = await loginService(data);
    Cookies.set('token', res.accessToken);
    localStorage.setItem('token', res.accessToken)
    localStorage.setItem('refresh_token', res.refreshToken)
    navigate("/LoginPanel/AdminPanel")
} catch (err) {
    console.log(err)
}
  
}
  
  return (
    < >
      <div className={styles.wraper}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <img src="/img/logo.jpg"  className={styles.logo}/>
        
         <label> نام کاربری:  </label>
          <input type="text" name="userName" className={styles.input} {...register("userName")} />
          <p className={styles.para}>{errors.userName?.message}</p>

         <label>   رمزعبور:  </label>
          <input type="text" name="passWord" className={styles.input} {...register("passWord")}/>
          <p className={styles.para}>{errors.passWord?.message}</p>

          <div className={styles.btn}>
          <Button btnColor={"blue"} type={"submit"}>{"ورود"}</Button>
          <Link to="/"><Button btnColor={"gray"}>{"بازگشت"}</Button></Link>
          </div>
      </form>
      </div>
    </>
  )
}
export default LoginPanel;