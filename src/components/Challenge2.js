import React from 'react';
import Layout from './Layout.js';
import ProgressBar from './ProgressBar.js';
import ChallengeNav, { max } from './ChallengeNav.js';

// images
import jaxx01 from '../jaxx/01.PNG';
import jaxx02 from '../jaxx/02.PNG';
import jaxx03 from '../jaxx/03.PNG';
import jaxx04 from '../jaxx/04.PNG';
import jaxx05 from '../jaxx/05.PNG';
import jaxx06 from '../jaxx/06.PNG';

const step = 2

export default () =>

  <Layout activeTab="challenge">

    <ProgressBar step={step} max={max} />

    <div className="left">
      2. Create a new wallet with Jaxx
      <img src={jaxx01} className="pad" alt="Jaxx Screenshot 1" />
      <img src={jaxx02} className="pad" alt="Jaxx Screenshot 2" />
      <img src={jaxx03} className="pad" alt="Jaxx Screenshot 3" />
      <img src={jaxx04} className="pad" alt="Jaxx Screenshot 4" />
      <img src={jaxx05} className="pad" alt="Jaxx Screenshot 5" />
      <img src={jaxx06} className="pad" alt="Jaxx Screenshot 6" />
    </div>

    <ChallengeNav step={step} />

  </Layout>
