import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';

const Home = () =>
  <Layout activeTab="home">
    <h1 className='title'>Maiden creates a more intelligent economy by diversifying the leaders and makers in Finance and Blockchain Technology.</h1>

    <div className="left vspace-giant">
      <p>Maiden carries out its mission through three initiatives: </p>

      <ol>
        <li><b>Blockchain Education</b>: Teaching modern cryptocurrency investment and development skills to women, people of color, LGBTQIAP+, and others who have not traditionally had access to wealth.</li>
        <li><b>Culture &amp; Leadership</b>: Creating new spaces in tech and finance that tap into the power of multiple identities and intelligences. </li>
        <li><b>Diversity-Powered Consulting</b>: Providing expert-level <Link to='/consulting'>blockchain consulting</Link>, from token sale audits to smart contract development.</li>
      </ol>
    </div>
    <p>Stay in the loop by signing up for our mailing list:</p>
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
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button dark"
          />
        </div>
      </div>
    </form>
  </div>

// const Events = () =>
//   <div className='box vspace-giant pad'>
//     <h1>Upcoming Events</h1>
//     <p>
//       <b>Decentralized Conversations</b><br/>
//       Tuesday, Oct. 3, 6-8pm<br/>
//       Boulder - Location TBD<br/>
//     </p>
//     <p>
//       <b>Queering Finance</b><br/>
//       Sunday, Oct. 8, 4-6pm<br/>
//       Boulder - Location TBD<br/>
//     </p>
//     <p>
//       <b>Queering Finance</b><br/>
//       Thursday, Nov. 16, 6-8pm<br/>
//       Denver - Location TBD<br/>
//     </p>
//   </div>

export default Home
