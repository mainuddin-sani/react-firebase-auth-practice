import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handlerSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/register'>Register</Link></li>

                {
                    user ? 
                    <button onClick={handlerSignOut}>SignOut</button>
                    :
                    <li><Link to='/login'>login</Link></li>
                }
            </ul>
        </div>
    );
};

export default Header;