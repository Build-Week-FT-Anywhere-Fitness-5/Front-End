//DISPLAY WHEN LOGGED OUT (On Load, as if Home)
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
    background-color: red;
`;

const LoggedOutNav = props => {
    
    return (
        <div>
            <div className='title'>
                <h1>Anywhere Fitness</h1>
            </div>

            <NavStyle>
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
            </NavStyle>
        </div>
    )
}

export default LoggedOutNav;