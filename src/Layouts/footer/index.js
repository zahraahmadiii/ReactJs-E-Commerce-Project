import React from 'react'
import styles from "./style.module.css"
import { MdEmail, MdPhone, MdMap, MdNearMe } from "react-icons/md"

const Footer = () => {
  return (
  <>
   <div className={styles.topline}></div>
  <div className={styles.wrapper_footer} >
  <img src="/img/header.jpg" className={styles.footerImg}/>
  
  <div className={styles.footer}>

    <div classsName={styles.rows}>
        <h6 className={styles.h6}>راه های ارتباطی</h6>
        <div className={styles.icon} >
          <MdMap className={styles.para}/>  
         <p className={styles.para}> آدرس : تهران</p>
        </div>
       <div className={styles.icon} >
         <MdPhone className={styles.para}/>
         <p className={styles.para}>تلفن : 021323434 </p>
         
       </div>
       <div className={styles.icon} >
       <MdNearMe className={styles.para}/>
       <p className={styles.para}>کدپستی : 7714681823</p>
       </div>
      <div className={styles.icon}>
      <MdEmail className={styles.para}/>
       <p className={styles.para}>ایمیل: example@gmail.com</p>
      </div>
         
    </div>

    <div className={styles.rows}>
        <h6 className={styles.h6}>خدمات مشتریان</h6>
        <p className={styles.para}>پاسخ به پرسشهای متدوال</p>
        <p className={styles.para}>حریم خصوصی</p>
        <p className={styles.para}>گزارش باگ</p>
    </div>

    <div className={styles.rows}>
    <h6 className={styles.h6}>راهنمای خرید از بست بای</h6>
        <p className={styles.para}> نحوه ثبت سفارش</p>
        <p className={styles.para}>رویه ارسال سفارش</p>
        <p className={styles.para}>شیوه های پرداخت</p>
    </div>

    </div>
    </div>
   </>
  )
}
export default Footer;