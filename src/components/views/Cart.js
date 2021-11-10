import React from 'react'

import {useCart} from '../contexts/Cart'
function Cart() {
    const {itemsInCart} = useCart();

    return (
        <div>
            {itemsInCart.map(itemsInCart => <div key ={itemsInCart._id}>{itemsInCart.name}</div>)}
        </div>
    )
}

export default Cart
