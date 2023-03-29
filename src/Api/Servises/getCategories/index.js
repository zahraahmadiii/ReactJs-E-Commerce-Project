import { instance } from "../../Constants/index"

export  const getProductsCategory=(category,page,limit)=> instance.get(`/products?category=${category}&&_page=${page}&_limit=${limit}`)