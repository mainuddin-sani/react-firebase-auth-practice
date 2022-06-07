import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
        </div>
    );
};

export default Header;