import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar';
import What from './components/What';
import Contact from './components/Contact';
import Why from './components/Why';
import How from './components/How';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Homepage/>

    </div>
  );
}

export default App;
