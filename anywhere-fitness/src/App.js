import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';

import Nav from './Components/Header/Nav';
import LoginModal from './Components/Login/LoginModal';
import InstructorProfileNav from './Components/Header/InstructorProfileNav';
import SignUpModal from './Components/Login/SignUpModal';
import InstructorDash from './Components/Instructor/InstructorDashboard';
import ClassesList from './Components/Classes/ClassesList';
import Card from './Components/Classes/Card';
import AddClassForm from './Components/Instructor/AddClassForm';
import ClientDashboard from './Components/Client/ClientDashboard';


function App() {
  //State For ClassesList Props:
  const [ myClasses, setMyClasses ] = useState([]);

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

  useEffect(() => {
    const getMyClasses = () => {
      axios
        .get('https://anywherefitnessclasses.herokuapp.com/api/classes/')
        .then(res => {
          setMyClasses(res.data);
        })
        .catch(err => 
          console.log(err));
    };
    getMyClasses();
  }, []);

  return (
    <div className="App">
      <Nav openLogin={handleLoginModal} loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
        {loginModalOpen && <LoginModal loginData={loginData} setLoginData={setLoginData} handleLoginModal={handleLoginModal}/>}
        {signModalOpen && <SignUpModal />}
      

      <Route
        exact
        path="/"
        render={props => <InstructorDash {...props} myClasses={myClasses} />}
      />
      {/* <Nav openLogin={handleLoginModal}/>
      {loginModalOpen && <LoginModal />} */}

      <Switch>
        <Route path="/addClassForm" component={AddClassForm} />
        <Route path="/class-list" component={Card} />
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
