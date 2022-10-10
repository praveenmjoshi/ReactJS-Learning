
import { combineReducers } from 'redux';
import { userReducer, userDetailReducer } from "./users/usersReducer";
import postsReducer from './posts/postsReducer';


const rootReducer = combineReducers({
    userState: userReducer,
    userDetailState : userDetailReducer,
    postsState: postsReducer
})

export default rootReducer;

