import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import CoachDashBoard from './components/CoachDashBoard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route path="/coachdashboard" component={CoachDashBoard}/>
    </div>
  );
}

export default App;
