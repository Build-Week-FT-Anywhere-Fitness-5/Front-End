import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import LoggedOutNav from './Components/Header/LoggedOutNav';
import LoginForm from './Components/Header/LoginSignup/LoginForm';
import SignupForm from './Components/Header/LoginSignup/SignupForm';
import InstructorDash from './Components/UserInstructor/InstructorDashboard';
import Card from './Components/UserToolClasses/Card';
import AddClassForm from './Components/UserInstructor/AddClassForm';
import ClientDash from './Components/UserClient/ClientDash';
import OnBoarding from './Components/OnBoarding/OnBoarding';
import { OnboardingData } from './Components/OnBoarding/OnBoardingData';

function App() {
  //State For ClassesList Props:
  const [ myClasses, setMyClasses ] = useState([]);

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
        <Switch>
          <Route
              exact
              path="/"
              render={props => <LoggedOutNav {...props} myClasses={myClasses} />}
          />

          <Route
            exact
            path="/Login"
            render={props => <LoginForm {...props} myClasses={myClasses} />}
          />
          <Route
            exact
            path="/Signup"
            render={props => <SignupForm {...props} myClasses={myClasses} />}
          />
            <Route
              exact
              path="/InstructorDash"
              render={props => <InstructorDash {...props} myClasses={myClasses} />}
            />
              <Route path="/addClassForm" component={AddClassForm} />
              <Route path="/class-list" component={Card} />
                {//Route To UpdateForm
                }

            <Route
              exact
              path="/ClientDash"
              render={props => <ClientDash {...props} myClasses={myClasses} />}
            />

          <Route path="/class-list" component={Card} />

          <Route path='/onboarding'> 
            <OnBoarding slides={OnboardingData} /> 
          </Route>

        </Switch>
    </div>
  );
}

export default App;