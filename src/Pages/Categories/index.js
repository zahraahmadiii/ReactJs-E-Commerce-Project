import React from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
const Categories = () => {

  const [searchParams] = useSearchParams();
  
  return (
    <>
    <Header/>
     <div className={styles.mobile}>
      <Link to="/Categories"> Categories</Link>
      <h2>{`کالاهای گروه ${searchParams.get("id")}`}</h2>
    </div>
    </>
   
  )
}
export default Categories;