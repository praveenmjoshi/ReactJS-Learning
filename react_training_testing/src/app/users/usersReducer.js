import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USER_DETAIL_ERR, FETCH_USER_DETAIL_REQ, FETCH_USER_DETAIL_SUC } from './actionTypes' ;

const initialState = {
    loading: false,
    users: [],
    error: false
}

const initialUserState = {
    loading: false,
    user: {},
    error: false
}

const userReducer = (state= initialState, action) =>{
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


const userDetailReducer = (state = initialUserState, action) =>{
    console.log(action)
    switch(action.type){
        case FETCH_USER_DETAIL_REQ:
            return{
                ...state,
                loading: true                
            }
        case FETCH_USER_DETAIL_SUC:
            return{
                loading: false,
                user: action.payload
            }
        case FETCH_USER_DETAIL_ERR:
            return{
                loading: false,
                user: action.payload
            }
        default: return state
    }
}


export {userReducer, userDetailReducer}