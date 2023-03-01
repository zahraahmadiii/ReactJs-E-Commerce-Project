import React from 'react'
import Button from '../../Components/button'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
const ProductDetail = () => {
  return (
    <div>
       <Navbar/>
         <Link to="/Mobile/ProductCategory/ProductDetail"><Button>{"افزودن به سبد خرید"}</Button></Link>
         <h2>کالای فلان</h2>
    </div>
  )
}
export default ProductDetail