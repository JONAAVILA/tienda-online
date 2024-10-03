import axios from "axios";

const URL = 'https://tienda-online-backend-riqf.onrender.com/singin'

export default async function postUser (values){
    try {
        const user = await axios.post(URL,values,{
            withCredentials:true
        })
        console.log(user.data)
    } catch (error) {
        console.log({error})
    }
}