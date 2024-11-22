import React from 'react';
import {Home} from '@components/Home';
import {NavbarComponent} from '@components/NavBar';
import {Introduction} from '@components/Introduction';
import { Contact } from '@components/Contact';
import '@styles/App.css';


const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <Introduction/>
      <Contact/>
    </div>
  );
};

export default App;

