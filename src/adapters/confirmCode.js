import axios from "axios"

const URL = 'http://localhost:3000/singin/check/code'

export async function confirmCode(code){
    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    return res.data
}   