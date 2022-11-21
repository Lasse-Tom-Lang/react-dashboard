import NavBarItem from './NavBarItem';

function NavBarLeft() {
  return (
    <nav id='navBar-left'>
      <NavBarItem itemName='Home' link='/'/>
      <NavBarItem itemName='Chats' link='/chats'/>
      <NavBarItem itemName='Surveys' link='/surveys'/>
      <NavBarItem itemName='Activity' link='/activity'/>
    </nav>
  );
}

export default NavBarLeft;