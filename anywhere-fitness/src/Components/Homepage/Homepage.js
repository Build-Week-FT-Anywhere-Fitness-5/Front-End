import React, { useState } from 'react';
import Nav from '../Header/Nav';
import LoginModal from '../Login/LoginModal';
import SignUpModal from '../Login/SignUpModal';


const Homepage = () => {
    {/*  Login Modal State and Handler  */}
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [loginData, setLoginData] = useState({
        userName: '',
        password: '',
        instructorAuthorization: ''
    });

    const [signModalOpen, setSignModalOpen] = useState(false);

    const handleLoginModal = e => {
        setLoginModalOpen(!loginModalOpen);
    }

    return(
        <div>
            <Nav openLogin={handleLoginModal} loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
            { loginModalOpen && <LoginModal loginData={loginData} setLoginData={setLoginData} handleLoginModal={handleLoginModal}/> }
            {signModalOpen && <SignUpModal />}
        </div>
    )

}
export default Homepage;