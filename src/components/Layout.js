import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../MaidenLogo_500px.png';

const Layout = ({ children, activeTab }) =>
  <div className="root">
    <div className="center">
      <nav>
        <Link
          to="/"
          className={activeTab === 'home' ? 'active button' : 'button'}
        >
          <span>Home</span>
        </Link>
        <Link
          to="/challenge"
          className={activeTab === 'challenge' ? 'active button' : 'button'}
        >
          <span>Maiden Challenge</span>
        </Link>
        <Link
          to="/about"
          className={activeTab === 'about' ? 'active button' : 'button'}
        >
          <span>About</span>
        </Link>
      </nav>
      <header>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <section className={activeTab}>
        {children}
      </section>
    </div>
  </div>;

export default Layout
