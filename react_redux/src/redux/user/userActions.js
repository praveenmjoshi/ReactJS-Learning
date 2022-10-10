import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionTypes"
import {get} from '../../services/httpService';

export const fetchUsersRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = (error) =>{
    return{
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

export const fetchUsersList = () =>{
    return (dispatch) =>{
        const url = 'https://jsonplaceholder.typicode.com/users' 

        dispatch(fetchUsersRequest())
        get(url)
        .then(response =>{
            const data = response.data
            dispatch(fetchUsersSuccess(data))
        })
        .catch(error =>{
            dispatch(fetchUsersError(error.message))
        })
    }
}