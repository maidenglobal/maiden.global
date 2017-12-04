import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import logoOnly from '../images/logo-only-small.png';

let boatOffset = 0

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = { boatOffset: 10 }
  }

  render() {

    const NavButton = ({ children, to }) =>
      <Link
        to={'/' + to}
        className={this.props.activeTab === to ? 'active button' : 'button'}
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
            <img src={this.props.label ? logo : logoOnly} className='App-logo' alt='logo' />
          </Link>
        </header>

        <section className={this.props.activeTab}>
          {this.props.children}
        </section>

      </div>

      <div style={{ marginTop: 100 }}><span style={{ marginLeft: this.state.boatOffset }} className='inline-block rock' onClick={e => {
        this.setState({ boatOffset: this.state.boatOffset + 20 })
      }}>⛵</span> ️</div>

    </div>
  }
}

export default Layout
