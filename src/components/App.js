import React from 'react';
import {Home} from '@components/Home';
import {NavbarComponent} from '@components/NavBar';
import {About} from '@components/About';
import { Contact } from '@components/Contact';
import '@styles/App.css';


const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;

