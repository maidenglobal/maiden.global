import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';

const Home = () =>
  <Layout activeTab="home" label="true">

  <h1 className = 'title'>Maiden creates a more intelligent economy by diversifying the leaders and makers in Finance and Blockchain Technology.</h1>
  
    <h1 className='ethDenverTitle'>
    Blockchain will change how the world operates as much as the Internet itself. Now is the time to involve a diverse population to generate new ideas, design, and implement the changes the world needs. Diversity will be key to bringing in new and unique perspectives and experiences to truly make the systems of the future work for everyone.
    <p>Regardless of your background may you be a creative, person of color, athlete, philanthropist etc, there are ample opportunities for those with and without technical experience to engage with this new technological frontier at the EthDenver Hackathon.</p>
    Begin your voyage into Blockchain with Maiden and apply for EthDenver here!</h1>

    <Newsletter/>
  </Layout>

const Newsletter = () =>
  <div id="mc_embed_signup">
    <form
      action="//global.us16.list-manage.com/subscribe/post?u=ab555efa78384cd5d0537ee96&amp;id=cebbfa7890"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        {
          // <label htmlFor="mce-EMAIL"></label><br/>
        }
        <input
          type="email"
          name="NAME"
          className="email"
          id="mce-NAME"
          placeholder="name"
          required
        />
        <br/>
        <input
          type="email"
          name="EMAIL"
          className="email"
          id="mce-EMAIL"
          placeholder="email address"
          required
        />
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_ab555efa78384cd5d0537ee96_cebbfa7890"
            tabIndex="-1"
            value=""
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button dark"
          />
        </div>
      </div>
    </form>
  </div>



export default Home
