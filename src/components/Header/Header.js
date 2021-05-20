import React from 'react';
import logo from '../../assets/icons/GitHub.svg';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <div className="Header__content">
        <h1 className="Header__content-logo">
          <img
            className="Header__content-logo-img"
            src={logo}
            alt="logo app"
            width="46"
            height="46"
          />
        </h1>
        <div className="Header__content-name">
          <h2 className="Header__content-name-title">requestum</h2>
          <p className="Header__content-name-kind">web development company</p>
        </div>
      </div>
      <div className="Header__description">Github users search app</div>
    </header>
  );
}

export default Header;
