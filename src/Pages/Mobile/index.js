import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
const Mobile = () => {
  return (
    <div>
       <Navbar/>
      <Link to="/Mobile/ProductCategory">mobile category</Link>
      <h2>کالاهای گروه موبایل</h2>
    </div>
  )
}
export default Mobile;