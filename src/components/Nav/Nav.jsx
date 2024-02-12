/* eslint-disable no-unused-vars */
import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link> 
        </div>
    );
};

export default Nav;