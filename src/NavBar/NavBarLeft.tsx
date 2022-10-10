import NavBarItem from './NavBarItem';

function NavBarLeft() {
  return (
    <nav id='navBar-left'>
      <NavBarItem itemName='Home'/>
      <NavBarItem itemName='Chats'/>
      <NavBarItem itemName='Surveys'/>
      <NavBarItem itemName='Activity'/>
    </nav>
  );
}

export default NavBarLeft;