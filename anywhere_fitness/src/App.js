import React from 'react';
import './App.css';
//import Register from './components/Register';
import Navigation from './components/Navigation';
import ClientDashList from './components/ClientDashList';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <ClientDashList/>
    </div>
  );
}

export default App;
