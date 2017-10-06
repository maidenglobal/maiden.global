import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';

export default () =>
  <Layout activeTab="challenge">
    <h2>
      Claim your identity on the blockchain and get a reward!
    </h2>
    <div className='left vspace-lg'>
      <p>
        The Maiden Challenge walks you through setting up your
        own cryptocurrency wallet.
      </p>
      <p>
        By solving the Maiden Challenge, you demonstrate financial skills that others with your identity may have never had.
      </p>
      <p>
        Claim your identity on the blockchain and join the resistance!
      </p>
    </div>

    <h2>
      <Link to="/challenge1" className="button dark">Take the Maiden Challenge!</Link>
    </h2>
  </Layout>
