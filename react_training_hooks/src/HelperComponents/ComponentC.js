import React, {useContext}  from 'react';
import { CountContext } from '../Components/UseReducerWithContext'


function ComponentC() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component C - Count {countContext.countState} == 
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentC
