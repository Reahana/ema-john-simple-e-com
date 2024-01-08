/* eslint-disable no-unused-vars */
import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <a href="/order">Order</a>
            <a href="/order_review">Order Review</a>
            <a href="/manage_inventory">Manage Inventory</a>
            <a href="/login">Login</a> 
        </div>
    );
};

export default Nav;