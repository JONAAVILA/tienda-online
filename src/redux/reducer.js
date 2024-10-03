import { SAVE_EMAIL } from "./actions/actionsTypes";

const initialState = {
    user:{
        email:''
    }
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SAVE_EMAIL:
            return{
                ...state,
                user:{
                    ...state.user,
                    email:action.payload
                }
            }
        default:
            return state
    }
}

export default rootReducer