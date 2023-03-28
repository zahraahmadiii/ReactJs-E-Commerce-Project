import React,{ useEffect }  from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import ControlledCarousel from '../../Components/Carousel';
import { instance } from '../../Api/Constants';

 const Home = () => {

//   useEffect(() => {
//     instance.get('/protection').then(res => {
//         console.log(res)
//     })
// })
  return (
    <>
      <Header/>
   
     <div className={styles.products}>
       <Link to="/Products">گوشی موبایل</Link>
       <Link to="/Products">تبلت</Link>
       <Link to="/Products">لپ تاپ</Link>
       <Link to="/Products">ایرپاد</Link>
     </div>

   <ControlledCarousel/>
    </>
  )
}
export default Home;
