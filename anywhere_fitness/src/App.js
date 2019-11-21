import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CoachDashBoard from './components/CoachDashBoard';
import Login from './components/Login';
import ClientDashList from './components/ClientDashList';
import NewUser from './components/Register';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [data, setData] = useState('');
  return (
    <div className='App'>
      <Route exact path='/' component={Login} />
      <Route path='/Register' component={NewUser} />
      <PrivateRoute path='/CoachDashBoard' component={CoachDashBoard} />
      <PrivateRoute path='/ClientDashList' component={ClientDashList} />
    </div>
  );
}

export default App;
