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
            <h2>AnywhereFitness</h2>
            {/* {onHomePage && <button onClick={openLogin}>Login/ Sign-UP</button>}
            {onProfilePage &&} */}
            <button>Log Out</button>
            <Link to="/clienthome" onClick={handleRouteChange}>Client Temp</Link><br/>
            <Link to="/dashboard" onClick={handleRouteChange}>Instructor Temp</Link><br/>
            <Link to="/" onClick={handleHomeRoute}>Home</Link>
        </NavStyle>
    )
}

export default Nav