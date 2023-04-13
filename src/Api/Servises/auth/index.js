import { instance } from "../../Constants/index";

export const loginService = async (data) => {
    const res = await instance.post('/auth/login', data) 
    return res.data;
}