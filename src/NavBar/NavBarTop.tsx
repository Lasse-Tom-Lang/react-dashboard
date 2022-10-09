import React from 'react';
import Logo from "./logo.png";
import ProfileInfo from './ProfileInfo';

function NavBarTop() {
  return (
    <nav id='navBar-top'>
      <img src={Logo} alt="Logo"/>
      <ProfileInfo/>
    </nav>
  );
}

export default NavBarTop;