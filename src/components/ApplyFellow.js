import React from 'react';
import Layout from './Layout.js';

export default () =>
  <Layout activeTab="ApplyFellow">

    <h1 className='title'>Three powerful ways to commit to diversity</h1>

    <div className="left vspace-lg">
      <ul>
        <li><b>Community Organizer</b>: Engage with the blockchain community around diversity and inclusivity: write blog posts, provide new perspectives on industry news, and respond to social media. Develop your understanding of impact and change while working to shift the culture of blockchain with the support of Maiden leaders.</li>
        <li><b>Developer Fellow</b>: Receive expert-level mentoring focusing on smart contract development skills. Learn critical skills for blockchain development including network behavior, role analysis, smart contract architecture, and security auditing skills. Gain priority access to paid development contracts in the blockchain space.</li>
        <li><b>Team Fellow</b>: Continue developing your team's dapp with social, technical, and financial support from Maiden. Commit to inclusivity in your product and in your team. Receive mentoring, be highlighted in the community, and be in a priority position to receive project funding.</li>
      </ul>
    </div>

    <div className="left">
      <p>The Maiden Fellowship Program is a remote or in-person 10-week fellowship with individual mentoring from the Maiden leadership team, access to blockchain community and industry contacts, and the opportunity to contribute to increasing diversity in blockchain.</p>

      <p>Fellows will work with Maiden leadership to design an individualized work plan for the duration of the Fellowship. Applications will be accepted on a rolling basis. Phone interviews will be scheduled with qualified applicants.</p>
    </div>

    <p><a className='button dark' href="https://docs.google.com/forms/d/e/1FAIpQLSdkX8zTe2mHUEEfUXNseQU4tFsYMw4rqW9z2Vi3cdfFfQuR5A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Apply Now</a></p>

  </Layout>
