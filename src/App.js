import React from 'react';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header'
// import Wizard from './components/wizard/Wizard'
import { HashRouter } from 'react-router-dom'
import router from './routes'


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      {router}
    </div>
    </HashRouter>
  );
}

export default App;
