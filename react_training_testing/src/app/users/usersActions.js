import * as action from "./actionTypes";
import { get } from '../../services/HttpService';
import { baseURL, usersAPI } from "../../common/constants/config";


export const fetchUsersRequest = () =>{
    return{
        type: action.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (data) =>{
    return{
        type: action.FETCH_USERS_SUCCESS,
        payload: data
    }
}

export const fetchUsersError = (error) =>{
    return{
        type: action.FETCH_USERS_ERROR,
        payload: error
    }
}

export const fetchUserDetailReq = () =>{
    return{ 
        type: action.FETCH_USER_DETAIL_REQ
    }
}

export const fetchUserDetailSuc = (data) =>{
    return{
        type: action.FETCH_USER_DETAIL_SUC,
        payload: data
    }
}

export const fetchUserDetailErr = (data) =>{
    return{
        type: action.FETCH_USER_DETAIL_ERR,
        payload: data
    }
}

export const getUsersList = () =>{
    return async(dispatch) =>{
        const url = baseURL + usersAPI;
        dispatch(fetchUsersRequest());
        try{
            const response = await get(url);
            console.log('fetch success', response)
            dispatch(fetchUsersSuccess(response.data))
        }catch(error){
            dispatch(fetchUsersError(error.message))
        }
        
    }
}

export const getUserDetails = (userId) =>{
    console.log(userId)
    return async(dispatch) =>{
        const url = baseURL + usersAPI + `/${userId}`
        dispatch(fetchUserDetailReq());
        try{
            const response = await get(url)
            setTimeout(()=>{
                dispatch(fetchUserDetailSuc(response.data))
            },3000)
        }catch(error){
            dispatch(fetchUserDetailErr(error.message))
        }
    }
}
