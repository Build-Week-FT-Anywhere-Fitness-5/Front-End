import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import LoggedOutNav from './Components/Header/LoggedOutNav';
import LoginForm from './Components/Header/LoginSignup/LoginForm';
import SignupForm from './Components/Header/LoginSignup/SignupForm';


import InstructorDash from './Components/UserInstructor/InstructorDashboard';
import Card from './Components/UserToolClasses/Card';
import ClassesList from './Components/UserToolClasses/ClassesList';
import AddClassForm from './Components/UserInstructor/AddClassForm';


import ClientDash from './Components/UserClient/ClientDash';



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
      <Router>

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

          {/* <Route exact path="/" component={Homepage} />
          <Route path="/item-form" component={AddClassForm} />
          <Route path="/addClassForm" component={AddClassForm} />
          <Route path="/class-list" component={Card} />
          <Route path='/dashboard' >
            <InstructorDash myClasses={myClasses} />
          </Route>
          <Route path='/clienthome' component={ClientDashboard} /> */}
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;