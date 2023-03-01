import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
const AdminLogin = () => {
  return (
    <>
      <Link to="/AdminLogin/AdminPanel"><Button >{"ورود"}</Button></Link>
      <Link to="/">بازگشت</Link>
      <h2>Adminlogin form page</h2>
    </>
  )
}
export default AdminLogin;