import {FC} from 'react';

interface NavBarItemProps {
  itemName: string,
  link: string
}

const NavBarItem:FC<NavBarItemProps> = (props) => {
  return (
    <button>
      {props.itemName}
    </button>
  );
}

export default NavBarItem;