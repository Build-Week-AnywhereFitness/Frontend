import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CoachDashBoard from './components/CoachDashBoard';
import Login from './components/Login';
import ClientDashList from './components/ClientDashList';
import NewUser from './components/Register';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Login} />
      <Route path='/Register' component={NewUser} />
      <Route path='/coachdashboard' component={CoachDashBoard} />
      <Route path='/ClientDashList' component={ClientDashList} />
    </div>
  );
}

export default App;
