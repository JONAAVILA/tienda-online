import { SAVE_EMAIL } from "./actions/actionsTypes";

const initialState = {
    email:''
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SAVE_EMAIL:
            return{
                ...state,
                email:action.payload
            }
        default:
            return state
    }
}

export default rootReducer