import React from 'react';
import "./style.scss"
import NavBarLeft from './NavBar/NavBarLeft';
import NavBarTop from './NavBar/NavBarTop';
import Main from './Main/Main';

function App() {
  return (
    <>
      <NavBarTop/>
      <NavBarLeft/>
      <Main/>
    </>
  );
}

export default App;