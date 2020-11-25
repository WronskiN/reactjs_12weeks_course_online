import React from 'react';
import './style.css';

function NavList({ children }) {
  return <ul className='nav__list'>{children}</ul>;
}

export default NavList;
