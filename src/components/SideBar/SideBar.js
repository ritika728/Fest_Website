import image from 'confetti/src/models/image';
import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './SideBar.css';
import Day from '../assests/day.png'


export default props => {
  
  return (
    <div>
  
    <Menu>
    <img classname='daylogo' src={Day}></img>
    <a className="menu-item" href="/">
        Home
      </a>
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
        Collaborators and Community Partners
      </a>
      <a className="menu-item" href="/sponsors">
        Sponsors
      </a>
    </Menu>
    </div>
  );
};