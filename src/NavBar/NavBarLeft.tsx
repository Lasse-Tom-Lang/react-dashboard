import NavBarItem from './NavBarItem';

function NavBarLeft() {
  return (
    <nav id='navBar-left'>
      <NavBarItem itemName='Home' link='/'/>
      <NavBarItem itemName='Users' link='/users'/>
      <NavBarItem itemName='Notes' link='/notes'/>
      <NavBarItem itemName='Logs' link='/logs'/>
    </nav>
  );
}

export default NavBarLeft;