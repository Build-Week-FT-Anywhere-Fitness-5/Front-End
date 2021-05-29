//DISPLAY WHEN LOGGED IN (INSIDE USERHEADER)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
    background-color: red;
`;

const LoggedInNav = props => {
    
    return (
        <div>
            <div className='title'>
                <h1>Anywhere Fitness</h1>
            </div>

            <NavStyle>
                <h2>Nav Bar</h2>
                <Link to='/'>
                <button className='nav-btn'>Home</button>
                </Link>        
            </NavStyle>
        </div>
    )
}

export default LoggedInNav;