import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import logoOnly from '../images/logo-only-small.png';

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = { boatOffset: 10 }
  }

  render() {

    const NavButton = ({ children, to, className }) =>
      <Link
        to={'/' + to}
        className={'button ' + (this.props.activeTab === to ? 'active ' : ' ') + className}
      ><span>{children}</span></Link>

    return <div className='root'>
      <div className='center'>

        <nav>
          <NavButton to=''>Home</NavButton>
          <NavButton to='labs'>Labs</NavButton>
          <NavButton to='about'>About</NavButton>
        </nav>

        <header>
          <Link to='/'>
            <img src={this.props.label ? logo : logoOnly} className='App-logo' alt='logo' />
          </Link>
        </header>

        <section className={this.props.activeTab}>
          {this.props.children}
        </section>

      </div>

      <div style={{ marginTop: 100 }}><span role='img' aria-label='Maiden' style={{ marginLeft: this.state.boatOffset }} className='inline-block rock' onClick={e => {
        this.setState({ boatOffset: this.state.boatOffset + 20 })
      }}>⛵</span> ️</div>

    </div>
  }
}

export default Layout
