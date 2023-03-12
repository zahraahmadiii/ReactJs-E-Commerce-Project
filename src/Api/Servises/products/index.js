import { instance } from "../../Constants/index"
 import axios from "axios";

export const fetchproducts=()=> instance.get("/products?")
//  `/products?_page=${1}&_limit=${5}`

export const postProducts=(newProduct)=>axios.post(`http://localhost:3002/products`, newProduct);