import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InstructorDash from './Components/Instructor/InstructorDashboard';
import ClientDashboard from './Components/Client/ClientDashboard';

function App() {
  return (
    <div className="App">
      <header>Anywhere Fitness</header>

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
