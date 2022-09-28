import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './SideBar.css';


export default props => {
  
  return (
    
    <Menu>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/events">
        Events
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/partners">
        Community Partners
      </a>
    </Menu>
  );
};