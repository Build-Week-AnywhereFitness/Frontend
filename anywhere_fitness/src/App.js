import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import CoachDashBoard from './components/CoachDashBoard';
import Login from './components/Login';
import Register from './components/Register';
import ClientDashList from './components/ClientDashList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Login}/>
      <Route path="/coachdashboard" component={CoachDashBoard}/>
      <Route path="/clientdashbord" component={ClientDashList}/>
      <Route path="/register" component={Register}/>
    </div>
  );
}

export default App;
