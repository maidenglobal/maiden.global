import React from 'react';
import Layout from './Layout.js';
import Newsletter from './Newsletter.js';

const Home = () =>
  <Layout activeTab="home" label="true">
    <h1 className='title'>Maiden creates a more intelligent economy by diversifying the leaders, makers, and culture of Blockchain Technology.</h1>

    <div className="vspace-giant">
      <p>Get ready for our big announcement. Sign up for our mailing list:</p>
      <Newsletter />
    </div>
  </Layout>

export default Home
