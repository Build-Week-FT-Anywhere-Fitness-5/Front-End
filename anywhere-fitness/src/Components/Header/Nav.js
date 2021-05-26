import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
    background-color: red;
`;

const Nav = props => {
    const { openLogin, setLoginModalOpen } = props;

    const [onHomePage, setOnHomePage] = useState(true);
    const [onProfilePage, setOnProfilePage] = useState(false);

    const handleRouteChange = e => {
        setOnHomePage(false);
        setOnProfilePage(true);
        setLoginModalOpen(false);
    }

    const handleHomeRoute = e => {
        setOnHomePage(true);
        setOnProfilePage(false);
    }

    return (
        <NavStyle>
            <h2>Nav Bar</h2>
            <p>import Client and Instructor Search Components and render them conditionaly</p>
            {onHomePage && <button onClick={openLogin}>Login/ Sign-UP</button>}
            {onProfilePage && <button>Log Out</button>}
            <br/>
            <Link to="/clienthome" onClick={handleRouteChange}>Client Temp</Link><br/>
            <Link to="/dashboard" onClick={handleRouteChange}>Instructor Temp</Link><br/>
            <Link to="/" onClick={handleHomeRoute}>Home</Link>
        </NavStyle>
    )
}

export default Nav