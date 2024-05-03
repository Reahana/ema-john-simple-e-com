/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Nav = () => {

    const {user , logOut}= useContext(AuthContext)
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='nav'>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link> 
            <Link to="/signup">Signup</Link> 
            {
                    user && <span className='text-white'>   Welcome {user.email}
                    <button onClick={handleLogout}> Log out</button> 
                     </span>
                }
        </div>
    );
};

export default Nav;