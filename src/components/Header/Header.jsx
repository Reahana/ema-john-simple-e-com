/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
           <Nav></Nav>
          
        </nav>
    );
};

export default Header;