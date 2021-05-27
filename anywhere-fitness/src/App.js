import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';

//import Nav from './Components/Header/Nav';
import LoginModal from './Components/Login/LoginModal';

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
      <NavLink exact to="/item-form">
            Add Item
      </NavLink>

      <Route
        exact
        path="/"
        render={props => <ClassesList {...props} myClasses={myClasses} />}
      />
      {/* <Nav openLogin={handleLoginModal}/>
      {loginModalOpen && <LoginModal />} */}
      <Route path="/item-form" component={AddClassForm} />


      <Switch>
        <Route path="/class-list" component={Card} />
        <Route path='/dashboard' >
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
