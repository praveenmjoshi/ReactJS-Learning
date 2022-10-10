import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
 

// import cakeReducer from './cakes/cakeReducer';
import rootReducer from './rootReducer';

// If there is a single reducer we can create a store directly with single reducer like below commented line
// const store = createStore(cakeReducer)

// If there are multiple reducers , 
// 1. Create a seperate file (ex. rootReducer.js) where we combine all the reducers.
// 2. Import rootReducer and create a store with it.
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
