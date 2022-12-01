import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Routing...</h1>
            <nav className='nav-bar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/about'>About</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;