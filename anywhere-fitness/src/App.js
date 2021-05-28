import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';

import InstructorDash from './Components/Instructor/InstructorDashboard';
import ClassesList from './Components/Classes/ClassesList';
import Card from './Components/Classes/Card';
import AddClassForm from './Components/Instructor/AddClassForm';
import ClientDashboard from './Components/Client/ClientDashboard';
import Homepage from './Components/Homepage/Homepage'


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
        {/* <Route
          exact
          path="/"
          render={props => <ClassesList {...props} myClasses={myClasses} />}
        /> */}
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/item-form" component={AddClassForm} />
//       <Route
//         exact
//         path="/"
//         render={props => <InstructorDash {...props} myClasses={myClasses} />}
//       />
        <Route path="/addClassForm" component={AddClassForm} />
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