import React, { useState, useEffect } from 'react'

function UseEffectOnlyOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // 1. Consider the below example,each time mouse is moved we need to perform some logic 
    // 2. We set event listener for mousemove event and updating the values, react renders component each time values are updated
    // 3. UseEffect triggers each time prop values updated & component re rendered which is UNNECESSARY in this case.
    
    // run UseEffect only ONCE
    // just pass the empty array as a second argument , which means useEffect is not dependent on any properties 
    // So there is no reason for useEffect to re run after any properties are updated
    useEffect(()=>{
        console.log('useEffect');
        window.addEventListener('mousemove', mouseMoveEvent)

        //  useEffect can return a function which will be executed when Component is unmounted.
        //  in this function perform activites like unsubscribing to async calls, remove event listeners, timers etc.
        return () =>{
            console.log('Component unmounting')
            window.removeEventListener('mousemove', mouseMoveEvent)
        }
    }, [])

    const mouseMoveEvent = (e) =>{
        console.log('mouseMoveEvent');
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>
            Position: {x} : {y}
        </div>
    )
}

export default UseEffectOnlyOnce
