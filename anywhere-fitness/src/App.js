import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Header/Nav';
import LoginModal from './Components/Login/LoginModal';
import InstructorProfileNav from './Components/Header/InstructorProfileNav';
import SignUpModal from './Components/Login/SignUpModal';
import InstructorDash from './Components/Instructor/InstructorDashboard';
import ClientDashboard from './Components/Client/ClientDashboard';

function App() {
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

  return (
    <div className="App">
      <Nav openLogin={handleLoginModal} loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
        {loginModalOpen && <LoginModal loginData={loginData} setLoginData={setLoginData} handleLoginModal={handleLoginModal}/>}
        {signModalOpen && <SignUpModal />}
      <Switch>
        <Route path='/dashboard' >
          <InstructorProfileNav loginData={loginData}/>
          <InstructorDash />
        </Route>
        <Route path='/clienthome'>
          <ClientDashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
