import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
const LoginPanel = () => {
  return (
    <>
      <Link to="/LoginPanel/AdminPanel"><Button >{"ورود"}</Button></Link>
      <Link to="/">بازگشت</Link>
      <h2>Adminlogin form page</h2>
    </>
  )
}
export default LoginPanel;