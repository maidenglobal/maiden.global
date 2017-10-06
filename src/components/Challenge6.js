import React from 'react';
import Layout from './Layout.js';
import ProgressBar from './ProgressBar.js';
import ChallengeNav, { max } from './ChallengeNav.js';

const step = 6

export default () =>
  <Layout activeTab="challenge">

    <ProgressBar step={step} max={max} />

    <h1 className='vspace'>You did it!</h1>
    <h2>You have demonstrated real financial savvy in the crypto economy!</h2>
    <h2>Go spend your hard-earned Ether and learn more about what can be done with Cryptocurrencies and Blockchain Technology.</h2>

    <ChallengeNav step={step} />

  </Layout>
