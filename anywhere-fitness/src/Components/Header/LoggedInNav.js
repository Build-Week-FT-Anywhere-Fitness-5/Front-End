//DISPLAY WHEN LOGGED IN (INSIDE USERHEADER)
import React from 'react';
import { Link } from 'react-router-dom';


const LoggedInNav = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <Link to='/'>
                <button className='nav-btn'>Home</button>
            </Link>        
        </div>
    )
}

export default LoggedInNav;