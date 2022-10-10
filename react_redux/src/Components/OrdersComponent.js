import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderCake, orderSweets, orderIceCream } from '../redux/orders/orderActions';

function OrdersComponent() {
    const itemOrders = useSelector(state => state.ordersState);
    console.log(itemOrders)
    const dispatch = useDispatch()
    return (
        <div>
            <h2> Today's Orders </h2>
            <h4> Sweets - {itemOrders.sweetsOrder}</h4>
            <h4> Cakes - {itemOrders.cakesOrder}</h4>
            <h4> Ice creams - {itemOrders.iceCreamOrder}</h4>

            <span>===========================</span><br/>
            <button onClick={()=> dispatch(orderSweets())} style={{'margin': '5px'}}>Order Sweets</button>
            <button onClick={()=> dispatch(orderCake())} style={{'margin': '5px'}}>Order Cake</button>
            <button onClick={()=> dispatch(orderIceCream())} style={{'margin': '5px'}}>Order Ice cream</button>
        </div>
    )
}

export default OrdersComponent
