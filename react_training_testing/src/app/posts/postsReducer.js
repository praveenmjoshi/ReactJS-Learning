
import { FETCH_POSTS_REQ, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "./ActionTypes";
const initialState = {
    loading: false,
    error: false,
    posts: []
}

const postsReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POSTS_REQ:
            return{
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return{
                loading: false,
                posts: action.payload
            }
        case FETCH_POSTS_ERROR:
            return{
                loadin: false,
                error: action.payload
            }
        default: return state;
    }
}

export default postsReducer;