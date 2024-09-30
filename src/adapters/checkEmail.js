import axios from "axios";

const URL = 'https://tienda-online-backend-riqf.onrender.com/users/check/email'

export default async function checkEmail(email){
    console.log('adapter',email)
    const res = await axios.post(URL,{email:email})
    console.log('data',res.data)
    return res.data
}