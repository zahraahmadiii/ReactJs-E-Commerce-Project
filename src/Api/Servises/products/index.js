import { instance } from "../../Constants/index"
 export const fetchproducts=()=> instance.get("/products?")
//  `/products?_page=${1}&_limit=${5}`