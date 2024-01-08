/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <a href="1">1</a><a href="2">2</a><a href="3">3</a><a href="4">4</a>
        </div>
    );
};

export default Header;