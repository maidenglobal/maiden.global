import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../MaidenLogo_500px.png';

export const Layout = ({ children, activeTab }) =>
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
          to="/balance"
          className={activeTab === 'balance' ? 'active button' : 'button'}
        >
          <span>Check Balance</span>
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
