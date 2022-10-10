import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buy_iceCream } from '../redux';

function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCreamState.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Ice Creams-{numOfIceCreams} </h2>
            <button onClick={()=>{ dispatch(buy_iceCream())}}>Buy Icecream</button>
        </div>
    )
}

export default IceCreamContainer
