import React from 'react';
import Layout from './Layout.js';
import ProgressBar from './ProgressBar.js';
import ChallengeNav, { max } from './ChallengeNav.js';

const step = 4

export default () =>
  <Layout activeTab="challenge">

    <ProgressBar step={step} max={max} />

    <div className="left">
      4. Send 0.0001 ETH to <span className='address'>0x123</span>
    </div>

    <ChallengeNav step={step} />

  </Layout>
