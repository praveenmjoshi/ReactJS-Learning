import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionTypes"

const initialState = {
    loading: false,
    users: [],
    error: false
}

const userReducer = (state= initialState, action ) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default userReducer;