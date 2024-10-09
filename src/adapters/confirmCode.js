import axios from "axios"

const URL = 'http://localhost:3000/singin/code'

export default async function confirmCode (email){
    const res = await axios.post(URL,email,{
        withCredentials:true
    })
    return res.data
}