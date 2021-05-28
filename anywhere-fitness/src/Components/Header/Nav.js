import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from  './af_logo.svg';

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    width: 100vw;
    padding: 10px 30px;
    background-color: #292734;
    border-bottom: 8px solid #ff0073;
    margin-bottom: 20px;

    .logo {
        transition: all 0.3s ease-in-out;

        &: hover {
            filter: saturate(10%) brightness(95%);
            transition: all 0.3s ease-in-out;
        } 
    }

    .logo div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-family: 'Roboto Condensed'; 
        font-weight: 700;
        sans-serif;
    }

    .logo div span {
        font-family: 'Roboto', sans-serif;
	    font-style: italic;
        font-weight: 300;
        font-size: 1rem;
        letter-spacing: 4px;
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
            <Link to="/" onClick={handleHomeRoute} className="logo"><div><Logo height="60px" fill="#eaff00"/>ANYWHERE <span>FITNESS</span></div></Link>
            {onHomePage && <button onClick={openLogin}>Login/ Sign-UP</button>}
            {onProfilePage && <button>Log Out</button>}
        </NavStyle>
    )
}

export default Nav