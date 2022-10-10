import { ORDER_CAKE, ORDER_ICECREAM, ORDER_SWEETS } from "./actionTypes"

export const orderCake = () =>{
    return {
        type: ORDER_CAKE
    }
}

export const orderIceCream = () =>{
    return{
        type: ORDER_ICECREAM
    }
}

export const orderSweets = () =>{
    return{
        type: ORDER_SWEETS
    }
}