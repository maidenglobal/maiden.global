import React from 'react'
import Layout from './Layout.js'

import shira from '../images/shira.jpg'
import raine from '../images/raine.jpg'

export default () =>
  <Layout activeTab='about'>

    <div>
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

    <div className='vspace-giant'>
      <div className='compress'>
        <h1>Raine Revere</h1>
        <p>Co-Founder</p>
        <p><a href='https://twitter.com/metaraine' target='_blank' rel='noopener noreferrer'>@metaraine</a></p>
        <p><a href='mailto:raine@maiden.global'>raine@maiden.global</a></p>
      </div>
      <img src={raine} className='bio-pic' alt='Raine Revere' />
      <div className='paragraphs'>
        <p>Raine Revere is an engineer and educator in the Ethereum community who has spoken at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism and is the co-founder of Maiden, a company that delivers socially-aware blockchain education, cultural &amp; leadership development, and diversity-powered blockchain consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique capacity to engage deeply with both the technical and social aspects of technology.</p>
      </div>
    </div>


  </Layout>
