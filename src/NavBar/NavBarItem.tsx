import {FC} from 'react';
import {Link} from "react-router-dom"

interface NavBarItemProps {
  itemName: string,
  link: string
}

const NavBarItem:FC<NavBarItemProps> = (props) => {
  return (
    <Link to={props.link}>
      {props.itemName}
    </Link>
  );
}

export default NavBarItem;