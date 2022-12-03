import Logo from "./logo.png";
import ProfileInfo from './ProfileInfo';
import Watch from "./Watch";

function NavBarTop() {
  return (
    <nav id='navBar-top'>
      <img src={Logo} alt="Logo"/>
      <Watch/>
      <ProfileInfo name="Admin"/>
    </nav>
  );
}

export default NavBarTop;