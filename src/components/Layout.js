import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const Layout = ({ children, activeTab }) => {

  const NavButton = ({ children, to }) =>
    <Link
      to={'/' + to}
      className={activeTab === 'consulting' ? 'active button' : 'button'}
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
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </header>

      <section className={activeTab}>
        {children}
      </section>

    </div>
  </div>
}

export default Layout
