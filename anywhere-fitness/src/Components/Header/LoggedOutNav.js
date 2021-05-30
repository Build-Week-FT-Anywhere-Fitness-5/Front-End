//DISPLAY WHEN LOGGED OUT (On Load, as if Home)
import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutNav = () => {
    
    return (
        <div>
            <h2>Nav Bar</h2>
            <Link to='/login'>
                <button className='nav-btn'>Login</button>
            </Link>
            <Link to='/signup'>
                <button className='nav-btn'>Sign Up</button>
            </Link>
            <Link to='/'>
                <button className='nav-btn'>Home</button>
            </Link>        
        </div>
    )
}

export default LoggedOutNav;