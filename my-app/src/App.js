import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/" component={Login}/> */}
      <Route path="/dashboard" component={DashBoard}/>
    </div>
  );
}

export default App;
