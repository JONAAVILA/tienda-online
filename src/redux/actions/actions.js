import { SAVE_EMAIL } from "./actionsTypes"

export default function saveEmail(email) {
    return async (dispatch)=>{
        return dispatch({
            type:SAVE_EMAIL,
            payload:email
        })
    }
}