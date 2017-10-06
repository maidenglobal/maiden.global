import React from 'react';
import Layout from './Layout.js';
import ProgressBar from './ProgressBar.js';
import ChallengeNav, { max } from './ChallengeNav.js';

const step = 5

export default () =>
  <Layout activeTab="challenge">

    <ProgressBar step={step} max={max} />

    <div className="left">
      <p>5. After about 30 seconds, if your transaction was successful, you will see your reward appear in Jaxx!  Confirm that your identity has been claimed on the Maiden Identities page.</p>
    </div>

    <ChallengeNav step={step} />

  </Layout>
