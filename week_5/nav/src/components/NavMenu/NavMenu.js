import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { NavList } from './';
import './style.css';

function NavMenu({ handleClick, toggleStatus }) {
  const [toggle, setToggle] = useState();

  useEffect(() => {
    setToggle(toggleStatus);
  }, [toggleStatus]);

  useEffect(() => {
    setToggle(toggleStatus);

    return;
  }, [toggleStatus]);

  return (
    <div className={toggle ? 'nav nav--open' : 'nav'}>
      <Button content='x' btnClass='btn--innerNav' handleClick={handleClick} />
      <NavList>
        <NavLink to='/' exact className='link'>
          Home
        </NavLink>
        <NavLink to='about' className='link'>
          About
        </NavLink>
        <NavLink to='users' className='link'>
          Users
        </NavLink>
        <NavLink to='contact' className='link'>
          Contact
        </NavLink>
      </NavList>
    </div>
  );
}

export default NavMenu;
