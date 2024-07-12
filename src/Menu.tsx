import React from 'react'
import "./Menu.css";

interface MenuProps {
  show: boolean;
}

const Menu: React.FC<MenuProps> = ({show}) => {
  return (
    <ul className={`menu bg-base-200 rounded-box w-56 ${show ? 'show' : ''}`}>
      <li>
        <h2 className="menu-title">Title</h2>
        <ul>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </li>
    </ul>
  );
}

export default Menu