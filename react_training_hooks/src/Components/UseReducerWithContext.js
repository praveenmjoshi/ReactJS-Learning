import React, {useReducer} from 'react'
import ComponentA from '../HelperComponents/ComponentA';
import ComponentB from '../HelperComponents/ComponentB';
import ComponentC from '../HelperComponents/ComponentC';

export const CountContext = React.createContext();

const initial_state = 0
const reducer = (state,action) =>{
    switch(action){
        case "increment":
            return state + 1;
        case "decrement":
            return state -1 ;
        case "reset":
            return initial_state;
        default:
            return state;
    }
}


function UseReducerWithContext() {

    const [ count, dispatch] = useReducer(reducer, initial_state);

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <div>
                Count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
        
    )
}

export default UseReducerWithContext
