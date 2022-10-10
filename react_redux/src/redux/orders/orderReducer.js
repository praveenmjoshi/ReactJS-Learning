import { ORDER_CAKE, ORDER_ICECREAM, ORDER_SWEETS } from "./actionTypes"


const initialState = {
    cakesOrder : 0,
    iceCreamOrder: 0,
    sweetsOrder: 0
}

const orderItemsReducer = (state= initialState, action)=>{
    switch(action.type){
        case ORDER_SWEETS:
            return{
                ...state,
                sweetsOrder: state.sweetsOrder + 1
            }
        case ORDER_CAKE:
            return{
                ...state,
                cakesOrder: state.cakesOrder + 1
            }
        case ORDER_ICECREAM:
            return{
                ...state,
                iceCreamOrder: state.iceCreamOrder + 1
            }
        default: {
            console.log('from reducer',state)
            return state
        };
    }
}

export default orderItemsReducer
