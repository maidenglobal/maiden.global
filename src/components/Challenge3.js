import React from 'react';
import Layout from './Layout.js';
import ProgressBar from './ProgressBar.js';
import ChallengeNav, { max } from './ChallengeNav.js';

// images
import jaxx07 from '../jaxx/07.PNG';
import jaxx08 from '../jaxx/08.PNG';
import jaxx09 from '../jaxx/09.PNG';
import jaxx10 from '../jaxx/10.PNG';
import jaxx11 from '../jaxx/11.PNG';
import jaxx12 from '../jaxx/12.PNG';

const step = 3

export default () =>

  <Layout activeTab="challenge">

    <ProgressBar step={step} max={max} />

    <div className="left">
      3. Scan paper wallet to import ETH
      <img src={jaxx07} className="pad" alt="Jaxx Screenshot 7" />
      <img src={jaxx08} className="pad" alt="Jaxx Screenshot 8" />
      <img src={jaxx09} className="pad" alt="Jaxx Screenshot 9" />
      <img src={jaxx10} className="pad" alt="Jaxx Screenshot 10" />
      <img src={jaxx11} className="pad" alt="Jaxx Screenshot 11" />
      <img src={jaxx12} className="pad" alt="Jaxx Screenshot 12" />
    </div>

    <ChallengeNav step={step} />

  </Layout>
