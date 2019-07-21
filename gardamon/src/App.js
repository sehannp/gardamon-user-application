import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
function App() {
  return (
    <div>
      <Header/>
        <SignInAndSignUpPage/>
    </div>
  );
}

export default App;
