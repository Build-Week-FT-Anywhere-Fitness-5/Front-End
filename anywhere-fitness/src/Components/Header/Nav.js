import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavStyle from '../../Styles/NavStyle';
import { ReactComponent as Logo } from  './af_logo.svg';


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