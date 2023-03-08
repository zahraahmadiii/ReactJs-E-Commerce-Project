import React from 'react'
import ProductTable from '../../Components/ProductTable/index.js';
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import Button from '../../Components/button';
 const ProductPanel = () => {
  return (
    <>
    <AdminHeader/>
    <Button btnColor={"blue"}>{"افزودن کالا"}</Button>
    <ProductTable/>
    </>
    
  )
}
export default ProductPanel;