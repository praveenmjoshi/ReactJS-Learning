import { BUY_CAKE } from "./actionTypes";

export const buyCake = () =>{

    console.log('buy cake action dispatched');
    return {
        type: BUY_CAKE
    }
}
