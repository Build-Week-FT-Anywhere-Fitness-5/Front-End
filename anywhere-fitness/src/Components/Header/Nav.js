import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from  './af_logo.svg';

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    background-color: #b0234d;

    img {
        height: 50px;
        filter: invert(10%);
        opacity: 0.6;
        transition: all 0.5s ease-in-out;

        &:hover {
            filter: invert(95%);
            transition: all 0.3s ease-in-out;
        }
    }
`;

const Nav = props => {
    const { openLogin, setLoginModalOpen } = props;

    const [onHomePage, setOnHomePage] = useState(true);
    const [onProfilePage, setOnProfilePage] = useState(false);

    const handleHomeRoute = e => {
        setOnHomePage(true);
        setOnProfilePage(false);
    }

    return (
        <NavStyle>
            <Link to="/" onClick={handleHomeRoute}><Logo height="60px" fill="#eaff00"/></Link>
            {onHomePage && <button onClick={openLogin}>Login/ Sign-UP</button>}
            {onProfilePage && <button>Log Out</button>}
        </NavStyle>
    )
}

export default Nav