import React, {useState} from 'react';
import "./style.scss"
import NavBarLeft from './NavBar/NavBarLeft';
import NavBarTop from './NavBar/NavBarTop';
import Main from './Main/Main';

function App() {
  let [activePage, openPage] = useState("main")
  return (
    <>
      <NavBarTop/>
      <NavBarLeft/>
      {activePage==="main"?<Main/>:<></>}
    </>
  );
}

export default App;