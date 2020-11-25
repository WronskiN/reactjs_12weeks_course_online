import React, { useEffect, useState } from 'react';
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
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </NavList>
    </div>
  );
}

export default NavMenu;
