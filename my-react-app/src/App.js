import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import What from './components/What';
import Contact from './components/Contact';
import Why from './components/Why';
import How from './components/How';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <What/>
      <How/>
      <Why/>
      <Contact/>
    </div>
  );
}

export default App;
