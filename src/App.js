import { useEffect } from 'react';
import './App.module.css';
import Routs from './Routes/index';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from "../src/redux/Features/orders-slice"
function App() {
  const dispatch=useDispatch()
  const orders = useSelector(store => store.ordersSlice);
 useEffect(()=>{
     let localBasket = localStorage.getItem('basket') && JSON.parse(localStorage.getItem('basket'))

     if(localBasket){
      dispatch(addToCart(localBasket))
     }
    
 },[])

 useEffect(()=>{
  const basketData= JSON.stringify(orders.orderProduct)
  if(orders.orderProduct.length){
    localStorage.setItem("basket",basketData)  
  }
  },[orders.orderProduct])

 
  return (
    <div>
    <Routs/>
    </div>
  );
}

export default App;
