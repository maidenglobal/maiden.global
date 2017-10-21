import React from 'react';
import Layout from './Layout.js';

export default () =>
  <Layout activeTab="Consulting">

    <h1 className='title'>Maiden offers a suite of blockchain consulting services.</h1>

    <div className="left vspace-lg">
      <ul>
        <li><b>Smart Contract Development</b>: Design-to-deployment Ethereum smart contract development led by Solidity expert, Raine Revere.</li>
        <li><b>Token Contract Development</b>: ERC20-compatible token contracts. </li>
        <li><b>Security Auditing</b>: Enterprise-grade security audit with publishable report.</li>
      </ul>
    </div>
    <p>Email us today to inquire about availability.</p>
    <p><a href="mailto:info@maiden.global">info@maiden.global</a></p>

  </Layout>
