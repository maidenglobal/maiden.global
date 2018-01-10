import React from 'react';
import Layout from './Layout.js';
import Newsletter from './Newsletter.js';

export default () =>
  <Layout activeTab="ethdenver">

    <h1 className='title'>ETHDenver and Maiden Global  Are Joining Forces to Create the  Most Diverse Hackathon Ever!</h1>

    <h2 className='vspace text-dark'><b>Join us in Denver February 16th – 18th!<br/>
    Engage the Intelligence of Diversity to Design the Future Economy!</b></h2>

    <a href='#signup' className='button dark'>Sign Up Today</a>

    <div className="vspace-giant">

      <div className='left'>
        <h2>Blockchain is a revolutionary new technology  poised to restructure the global economy and  redesign major government and business systems, much like the internet did in the ‘90s.</h2>

        <h2>Working together, we have the chance to fundamentally  shift the balance of who has power and access  to financial resources in the future.</h2>
      </div>

      <div className='special-block vspace-lg'>
        <h2><b>Actively Seeking:</b></h2>
        <div className='text-emphasize'>
          Women
          <br/>Creatives
          <br/>LGBTQIA+
          <br/>Diversity
        </div>

        <p>No Tech Experience Needed.
        <br/>Ample scholarships available for travel/hotel!</p>
      </div>

      <div className="left">
        <p className='vspace'>Please join us to:</p>

        <ul className='compact'>
          <li>Learn about Blockchain technology in a diverse and fun environment.</li>
          <li>Design peer-to-peer solutions to the problems you are most passionate about solving.</li>
          <li>Bring your experiences and perspectives to help shape a newly emerging field.</li>
          <li>Gain access to a dynamic network of progressive professionals and explore new job opportunities.</li>
        </ul>

        <p>Who will have power in this new world order? With the emergence of decentralized digital currencies (such as Bitcoin) we have a chance to bring women, people of color and the LGBTQIA+ community into positions of power as the leaders, makers, and drivers of culture.</p>

        <p>Now is the time to dive in. Come to learn and connect! Join a team of peers who are imagining and designing solutions to the most pressing challenges of society.</p>

        <p>Whether you are an artist, athlete, activist, developer, student, or teacher, Maiden and ETHDenver warmly invite you to sign up today!</p>
      </div>

      <div id='signup' className='vspace-lg'>
        <Newsletter label='Sign Up' fields={['name', 'email']} action='https://global.us16.list-manage.com/subscribe/post?u=ab555efa78384cd5d0537ee96&amp;id=ec319f5db9' />
      </div>

      <p>Questions? Please reach out! Email: <a href='mailto:breana@maiden.global'>breana@maiden.global</a></p>

    </div>

  </Layout>
