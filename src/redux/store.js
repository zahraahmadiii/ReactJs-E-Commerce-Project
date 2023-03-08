import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Features/products-slice";
import ordersSlice from "./Features/orders-slice";
const store = configureStore({
  reducer: { products: productsSlice, ordersSlice: ordersSlice },
});
export default store;