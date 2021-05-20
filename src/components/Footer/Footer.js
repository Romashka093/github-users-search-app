import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__wrap">
        <p className="Footer__wrap-content">
          Created by{' '}
          <span className="Footer__wrap-content-spanning">
            Anna Romashchenko
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
