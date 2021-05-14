import React from 'react';
import logo from '../../assets/icons/GitHub.svg';
import './Header.scss';

function Header() {
  return (
    <>
      <div>
        <h1>
          <img src={logo} alt="logo app" width="46" height="46" />
        </h1>
        <div>
          <h2>requestum</h2>
          <p>web development company</p>
        </div>
      </div>
      <div>Github users search app</div>
    </>
  );
}

export default Header;
