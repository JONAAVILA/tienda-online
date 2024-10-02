import axios from "axios";

// const URL = 'https://tienda-online-backend-riqf.onrender.com/users/check/email'
const URL = 'http://localhost:3000/users/check/email'

export default async function checkEmail(email){
    console.log('adapter',email)
    const res = await axios.post(URL,{email:email},{
        withCredentials: true
    })
    console.log('data',res.data)
    return res.data
}