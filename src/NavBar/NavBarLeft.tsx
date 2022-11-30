import NavBarItem from './NavBarItem';

function NavBarLeft() {
  return (
    <nav id='navBar-left'>
      <NavBarItem itemName='Home' link='/'/>
      <NavBarItem itemName='Users' link='/users'/>
    </nav>
  );
}

export default NavBarLeft;