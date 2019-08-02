import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header'
import Wizard from './components/wizard/Wizard'


function App() {
  return (
    <div className="App">
      <Header />
      <Wizard />
      <Dashboard />
    </div>
  );
}

export default App;
