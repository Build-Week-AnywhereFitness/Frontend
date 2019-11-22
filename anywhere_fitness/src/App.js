import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//components
import CoachDashBoard from './components/CoachDashBoard';
import Login from './components/Login';
import ClientDashList from './components/ClientDashList';
import NewUser from './components/Register';

//private routes
import PrivateRoute from './utils/PrivateRoute';

// CONTEXT API
import CoachContext from './contexts/CoachContext';
import ClientContext from './contexts/ClientContext';

function App() {
  const [user, setUser] = useState([]);

  return (
    <CoachContext.Provider value={{ user, setUser }}>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <Route path='/Register' component={NewUser} />
        <PrivateRoute path='/CoachDashBoard' component={CoachDashBoard} />
        <PrivateRoute path='/ClientDashList' component={ClientDashList} />
      </div>
    </CoachContext.Provider>
  );
}

export default App;
