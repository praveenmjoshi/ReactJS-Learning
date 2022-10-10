import { FETCH_POSTS_REQ, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "./ActionTypes";
import { baseURL, postsAPI } from "../../common/constants/config";
import { get } from '../../services/HttpService';


const fetchPostsReq = () =>{
    console.log('post req dispatched')
    return{
        type: FETCH_POSTS_REQ
    }
}

const fetchPostsSuccess = (data) =>{
    return{
        type: FETCH_POSTS_SUCCESS,
        payload: data
    }
}

const fetchPostsError = (data) =>{
    return{
        type: FETCH_POSTS_ERROR,
        payload: data
    }
}


export const fetchPosts = () =>{
    return async(dispatch) =>{
        const url = baseURL + postsAPI;
        dispatch(fetchPostsReq());
        try{
            const response = await get(url);
            console.log('fetch success', response)
            dispatch(fetchPostsSuccess(response.data))
        }catch(error){
            dispatch(fetchPostsError(error.message))
        }
        
    }
}
