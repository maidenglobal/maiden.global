import React from 'react';
import Layout from './Layout.js';

export default () =>
  <Layout activeTab="labs">

    <h1 className='title text-giant'>Maiden Labs</h1>
    <h2 className='vspace'>Maiden Labs is an industry-backed lab for universal blockchain education and research.</h2>

    <div className="left vspace-lg">

      <p>Maiden Labs conducts comprehensive user learning research and develops authoritative, cross-cultural, and product-agnostic blockchain education to accelerate public trust and adoption. This industry-wide initiative achieves its mission through three directives: Global Research, Education, and the Member Lab.</p>
    </div>

    <div className="left vspace-lg">
      <h1>GLOBAL RESEARCH</h1>
      <p>Maiden Labs conducts new research into blockchain education for universal users. This goes beyond the traditional early adopters in tech and understands the requirements for broader adoption in a global setting. Membership provides leading crypto companies with access to ongoing, global user research that is typically too time-consuming, too expensive, or otherwise outside the scope of what individual companies can effectively accomplish. </p>

    </div>

    <div className="left vspace-lg">
      <h1>EDUCATION</h1>
      <p>Between product and infrastructure development, marketing, operations, and legal due diligence, blockchain companies have their hands full. It is not realistic for most of them to also be experts in education. Yet blockchain is a new technology with a learning curve. Whether a user is learning what cryptocurrencies are, how to use a wallet, security, or  the value of decentralization, they need to be guided through a seamless learning process that goes beyond what is provided in most products today. </p>

      <p>Maiden Labs expands the criteria for blockchain educational content in order to measurably and reliably accelerate global and inclusive adoption.</p>
    </div>

    <h2>Email <a href='mailto:labs@maiden.global'>labs@maiden.global</a> to inquire about membership.</h2>

  </Layout>
