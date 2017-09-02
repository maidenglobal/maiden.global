import React, { Component } from 'react';
import logo from './MaidenLogo_500px.png';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/challenge" component={Challenge}/>
    </div>
  </Router>
)

const Layout = ({ children}) => (
  <div>
    <div className='spread center pad-giant'>
      <div className='center-wrapper'>
        <header>
          <img src={logo} className='App-logo' alt='logo' />
        </header>

        {children}
      </div>
    </div>

    {
    // <section className='dark spread pad-giant'>
    //   <h2>
    //     Maiden is dedicated to diversifying the leaders and makers of Finance and Blockchain technology through tech education, cultural events, and diversity-powered blockchain consulting.
    //   </h2>
    //   {
    //   //<h2>💜⛵️✨</h2>
    //   }
    // </section>
    }
  </div>
)

const Home = () =>
  <Layout>
    <section className='pad'>
      <h2>
        Maiden is dedicated to diversifying the leaders and makers of Finance and Blockchain technology through tech education, cultural events, and diversity-powered blockchain consulting.
      </h2>
      {
      //<h2>💜⛵️✨</h2>
      }
    </section>
    <br />

    <section>
      <div id="mc_embed_signup">
        <form action="//global.us16.list-manage.com/subscribe/post?u=ab555efa78384cd5d0537ee96&amp;id=cebbfa7890" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            {
            // <label htmlFor="mce-EMAIL"></label><br/>
            }
            <input type="email" name="EMAIL" className="email vspace-sm" id="mce-EMAIL" placeholder="email address" required />
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_ab555efa78384cd5d0537ee96_cebbfa7890" tabIndex="-1" value="" />
            </div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
    </section>
    <br />

    <section>
      <Link to='/challenge'>Take the Maiden Challenge</Link>
    </section>

  </Layout>

const Challenge = () => (
  <Layout>
    <section className='pad'>
      <h2>Solve the Maiden Challenge and we'll give you $10 for being awesome.</h2>
      <p>The Maiden Challenge walks you through the steps of setting up your own wallet to send and receive cryptocurrency.</p>
    </section>
  </Layout>
)

export default App;
