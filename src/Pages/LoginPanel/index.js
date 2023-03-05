import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
const LoginPanel = () => {
  return (
    < >
      <div className={styles.wraper}>
      <form className={styles.form}>
        <img src="/img/logo.jpg"  className={styles.logo}/>
        
       <label> نام کاربری:  </label>
          <input type="text" className={styles.input}/>
        <label>   رمزعبور:  </label>
          <input type="text"  className={styles.input}/>
          <div className={styles.btn}>
          <Link to="/LoginPanel/AdminPanel"><Button btnColor={"blue"}>{"ورود"}</Button></Link>
          <Link to="/"><Button btnColor={"gray"}>{"بازگشت"}</Button></Link>
          </div>
      </form>
      </div>
    </>
  )
}
export default LoginPanel;