import React from 'react';
import {Home} from './Home';
import {NavbarComponent} from './NavBar';
import { Introduction } from './Introduction';
import 'C:/Users/Admin/Desktop/React/Portfolio/src/styles/App.css';



const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <Introduction/>
    </div>
  );
};

export default App;
