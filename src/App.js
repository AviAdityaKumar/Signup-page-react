import React from 'react';
import logo from './Assets/Icons/logo.svg';
import './App.css';
import SignupPage from './Container/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SignupPage />
    </div>
  );
}

export default App;
