import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    // This is BAD Practice to use state as setState is async function, previous state is not utilized properly
    // const customeIncrement = (times) =>{
    //     for(let i=0; i<times; i++){
    //         setCount(count+ 1)
    //     }
    // }

    // This is GOOD Practice to use call back functions and have previous state
    const customeIncrement = (times) =>{
        for(let i=0; i<times; i++){
            setCount(previousState => previousState + 1)
        }
    }


    return (
        <div>
            <h4>Counter: {count}</h4>
            <button onClick={()=>{setCount(0)}} >Reset</button>
            <button onClick={()=>{setCount( count + 1)}} >Increment</button>
            <button onClick={()=>{setCount( count - 1)}} >Decrement</button>

            <button onClick={() => customeIncrement(5)}> Increment By 5 </button>
        </div>
    )
}

export default Counter
