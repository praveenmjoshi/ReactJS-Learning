import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // 1. useEffect hooks accepts 1st argument as a function which executes after every render of Component 
    // 2. useEffect hook accepts 2nd argument as a Array, which can contain list of properties, 
    // so that useEffects triggers only when there is an update in any of the property passed in array
    useEffect(()=>{
        // use this hook to 
        // 1.make any ajax calls or 
        // 2.set initial values and 
        // 3.update values in DOM after some operation.

        // In this case this code runs only when count is updated, if name is updated this won't run as name is not passed in array     
        console.log('useEffect');
        console.log('This logic needs to be executed only if count is updated');
    }, [count])


    return (
        <div>
            {console.log('render')}

            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
            <button onClick={() => {setCount(count+1)}} >Clicked {count} Times</button>
        </div>
    )
}

export default UseEffectCounter
