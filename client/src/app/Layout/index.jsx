import React from 'react';
import logo from '../../assets/logo.svg';
import './index.css';

import Main from '../Screens/Main/index';

const Layout = () => {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <img src={logo} className="Layout-logo" alt="logo" />
        <p className="Layout-title">News</p>
      </header>
      <Main />
    </div>
  );
}

export default Layout;