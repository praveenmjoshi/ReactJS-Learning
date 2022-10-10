import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import orderItemsReducer from './orders/orderReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    cakeState: cakeReducer,
    iceCreamState: iceCreamReducer,
    ordersState: orderItemsReducer,
    userState: userReducer
})

export default rootReducer