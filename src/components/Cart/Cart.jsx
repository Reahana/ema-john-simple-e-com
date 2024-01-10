/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for (const product of cart){
        total = total + product.price
    }

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <p>Selected item: {cart.length}</p>
                <p>Total Price: $ {total}</p>
                <p>Shipping: $</p>
                <p>Tax: $</p>
                <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;