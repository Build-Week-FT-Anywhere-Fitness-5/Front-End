import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Header/Nav';

import InstructorDash from './Components/Instructor/InstructorDashboard';
import ClientDashboard from './Components/Client/ClientDashboard';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
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
