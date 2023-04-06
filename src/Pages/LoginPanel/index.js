import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { loginService } from '../../Api/Servises/auth';
import Cookies from "js-cookie";
import { instance } from '../../Api/Constants';
import { ToastContainer ,toast} from 'react-toastify';
import Slider from '../../Components/slider';
const LoginPanel = () => {

  const schema = yup.object({
    username:yup.string().required("نام کاربری الزامی است"),
    password:yup.string().required("رمزعبور را وارد کنید"),
  })

  const {
    register,
    handleSubmit,
   formState:{errors} } = useForm({ resolver:yupResolver(schema),mode:"onChange" })
   

 const navigate=useNavigate()
 useEffect(()=>{
  const token=localStorage.getItem('token')
  if(token){
    navigate("/LoginPanel/AdminPanel")
  }
 },[])

  const submitForm= async(data)=>{
  try {
    const res = await loginService(data);
    Cookies.set('token', res.accessToken);
    localStorage.setItem('token', JSON.stringify(res.accessToken))
    localStorage.setItem('refresh_token', res.refreshToken)
    navigate("/LoginPanel/AdminPanel")
    toast.success('خوش آمدید')

 } catch(error) {
    toast.error("نام کاربری و رمزعبور صحیح نیست");
    // console.log(error)
}
  
}


  
  return (
    < >
      <div className={styles.loginpage}>
      <ToastContainer/>
        <div className={styles.wraper}>
        <Slider/>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <img src="/img/logo.jpg"  className={styles.logo}/>
         <label> نام کاربری:  </label>
          <input type="text" name="username" className={styles.input} {...register("username")} />
          <p className={styles.para}>{errors.username?.message}</p>

         <label>   رمزعبور:  </label>
          <input type="text" name="password" className={styles.input} {...register("password")}/>
          <p className={styles.para}>{errors.password?.message}</p>

          <div className={styles.btn}>
          <Button btnColor={"blue"} type={"submit"}>{"ورود"}</Button>
          <Link to="/"><Button btnColor={"gray"}>{"بازگشت"}</Button></Link>
          </div>
      </form>
        </div>
      </div>
    </>
  )
}
export default LoginPanel;