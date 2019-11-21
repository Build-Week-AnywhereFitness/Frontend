import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CoachDashBoard from './components/CoachDashBoard';
import Login from './components/Login';
import ClientDashList from './components/ClientDashList';
import NewUser from './components/Register';
import PrivateRoute from './utils/PrivateRoute';
import CoachContext from './contexts/CoachContext';
import ClientContext from './contexts/ClientContext';

function App() {
  const [coaches, setCoaches] = useState('');
  const [clients, setClients] = useState([]);

  return (
    <CoachContext.Provider value={{ coaches }}>
      <ClientContext.Provider value={{ clients }}>
        <div className='App'>
          <Route exact path='/' component={Login} />
          <Route path='/Register' component={NewUser} />
          <PrivateRoute path='/CoachDashBoard' component={CoachDashBoard} />
          <PrivateRoute path='/ClientDashList' component={ClientDashList} />
        </div>
      </ClientContext.Provider>
    </CoachContext.Provider>
  );
}

export default App;
