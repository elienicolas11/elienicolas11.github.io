import React from 'react';
import {Home} from '@components/Home';
import {NavbarComponent} from '@components/NavBar';
import {About} from '@components/About';
import {Contact} from '@components/Contact';
import {Skills} from '@components/Skills';
import '@styles/App.css';


const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
};

export default App;

