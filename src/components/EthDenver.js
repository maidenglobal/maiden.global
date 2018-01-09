import React from 'react';
import Layout from './Layout.js';
import Newsletter from './Newsletter.js';

export default () =>
  <Layout activeTab="ethdenver">

    <h1 className='title'>ETHDenver: Celebrating blockchain and diversity!</h1>

    <div className="left vspace-lg">
      <p>Blockchain will change how the world operates as much as the Internet itself. Now is the time to involve a diverse population to generate new ideas, design, and implement the changes the world needs. Diversity will be key to bringing in new and unique perspectives and experiences to truly make the systems of the future work for everyone.</p>
      <p>Regardless of your background may you be a creative, person of color, athlete, philanthropist etc, there are ample opportunities for those with and without technical experience to engage with this new technological frontier at the EthDenver Hackathon.</p>
    </div>

    <Newsletter fields={['name', 'email']} />

  </Layout>
