import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import logoOnly from '../images/logo-only-small.png';

const Layout = ({ children, activeTab, label = false }) => {

  const NavButton = ({ children, to }) =>
    <Link
      to={'/' + to}
      className={activeTab === to ? 'active button' : 'button'}
    ><span>{children}</span></Link>

  return <div className='root'>
    <div className='center'>

      <nav>
        <NavButton to=''>Home</NavButton>
        <NavButton to='consulting'>Consulting</NavButton>
        <NavButton to='about'>About</NavButton>
      </nav>

      <header>
        <Link to='/'>
          <img src={label ? logo : logoOnly} className='App-logo' alt='logo' />
        </Link>
      </header>

      <section className={activeTab}>
        {children}
      </section>

    </div>
  </div>
}

export default Layout
