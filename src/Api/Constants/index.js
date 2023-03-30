import axios from "axios"
import Cookies from 'js-cookie';
export const BASE_URL="http://localhost:3002"
export const instance=axios.create({
    baseURL:BASE_URL,
})





