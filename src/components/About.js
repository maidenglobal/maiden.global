import React from 'react'
import Layout from './Layout.js'

import shira from '../images/shira.jpg'
import raine from '../images/raine.jpg'
import { Link } from 'react-router-dom'

export default () =>
  <Layout activeTab='about'>
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
    <div>
      <div className='compress'>
        <h1>Raine Revere</h1>
        <p>Co-Founder</p>
        <p><a href='https://twitter.com/metaraine' target='_blank' rel='noopener noreferrer'>@metaraine</a></p>
        <p><a href='mailto:raine@maiden.global'>raine@maiden.global</a></p>
      </div>
      
      <img src={raine} className='bio-pic' alt='Raine Revere' />
      <div className='paragraphs'>
        <p>Raine Revere is an engineer and educator in the Ethereum community who has spoken at blockchain events across the world. Raine is the Lead Architect of ShapeShift Prism and is the co-founder of Maiden, a company that delivers socially-aware blockchain education, cultural &amp; leadership development, and diversity-powered blockchain consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique capacity to engage deeply with both the technical and social aspects of technology.</p>
      </div>
    </div>

    <div className='vspace-giant'>
      <div className='compress'>
        <h1>Shira Frank</h1>
        <p>Co-Founder</p>
        <p><a href='https://twitter.com/shirabfrank' target='_blank' rel='noopener noreferrer'>@shirabfrank</a></p>
        <p><a href='mailto:shira@maiden.global'>shira@maiden.global</a></p>
      </div>
      <img src={shira} className='bio-pic' alt='Shira Frank' />
      <div className='paragraphs'>
        <p>Shira brings over 15 years of work in politics, social change, women’s philanthropy, and fundraising with her to the Blockchain and Fin-Tech industries. Shira spent seven years as a Deputy Director for J Street—the single-largest pro-Israel PAC in the US—working to transform the way Congress and the Executive branch engage in the Middle East and to promote the creation of a two-state solution to the Israeli-Palestinian conflict. During Shira's tenure, J Street partnered with the Obama Administration to successfully push the Iran-Nuclear deal through Congress and prevent a war with Iran. Shira holds a degree in Government and Political Theory from Smith College. She hails from the Redwood Coast of Arcata, CA and after spending eight years in our nation’s capital, she recently found her heart back in the wild west where she is currently living in Boulder, CO.</p>
      </div>
    </div>

  </Layout>
