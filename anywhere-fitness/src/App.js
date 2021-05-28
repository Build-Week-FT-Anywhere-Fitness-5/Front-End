import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';

import InstructorDash from './Components/Instructor/InstructorDashboard';
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
        <Route exact path="/" component={Homepage} />
        <Route path="/item-form" component={AddClassForm} />
        <Route path="/addClassForm" component={AddClassForm} />
        <Route path="/class-list" component={Card} />
        <Route path='/dashboard' >
          <InstructorDash myClasses={myClasses} />
        </Route>
        <Route path='/clienthome' component={ClientDashboard} />
      </Switch>
    </div>
  );
}

export default App;