import React from 'react';
import Layout from './Layout.js';
import ProgressBar from './ProgressBar.js';
import ChallengeNav, { max } from './ChallengeNav.js';

const step = 1

export default () =>
  <Layout activeTab="challenge">

    <ProgressBar step={step} max={max} />

    <div className="left">
      1. Download Jaxx mobile app
      <ul>
        <li><a
            href="https://itunes.apple.com/us/app/jaxx-bitcoin-ethereum-wallet/id1084514516?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >iOS</a></li>
        <li><a
            href="https://play.google.com/store/apps/details?id=com.kryptokit.jaxx&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >Android</a></li>
      </ul>
    </div>

    <ChallengeNav step={step} />

  </Layout>
