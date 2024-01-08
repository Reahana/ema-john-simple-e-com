/* eslint-disable no-unused-vars */
import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <a href="/shop">Shop</a>
            <a href="/order">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a> 
        </div>
    );
};

export default Nav;