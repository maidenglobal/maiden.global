import React from 'react';
import Layout from './Layout.js';
import Newsletter from './Newsletter.js';

const Home = () =>
  <Layout activeTab="home" label="true">
    <h1 className='title'>Maiden Labs conducts comprehensive user learning research and develops authoritative, cross-cultural, and product-agnostic blockchain education to accelerate public trust and adoption.
    </h1>

    <h2 className='vspace'>Maiden Lab is made possible by leading blockchain companies who are invested in the decentralized future. Membership is currently open.</h2>

    <div className="vspace-lg">
      <p>Sign up for our mailing list:</p>
      <Newsletter />
    </div>
  </Layout>

export default Home
