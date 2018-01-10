import React from 'react';
import Layout from './Layout.js';
import Newsletter from './Newsletter.js';
import { Link } from 'react-router-dom';

const Home = () =>
  <Layout activeTab="home" label="true">
    <h1 className='title'>Maiden creates a more intelligent economy by diversifying the leaders and makers in Finance and Blockchain Technology.</h1>

    <div className="left vspace-giant">
      <p>Maiden carries out its mission through three initiatives: </p>

      <ol>
        <li><b>Blockchain Education</b>: Teaching modern cryptocurrency investment and development skills to women, people of color, LGBTQIAP+, and others who have not traditionally had access to wealth.</li>
        <li><b>Culture &amp; Leadership</b>: Creating new spaces in tech and finance that tap into the power of multiple identities and intelligences. </li>
        <li><b>Diversity-Powered Consulting</b>: Providing expert-level <Link to='/consulting'>blockchain consulting</Link>, from token sale audits to smart contract development.</li>
      </ol>
    </div>
    <p>Stay in the loop by signing up for our mailing list:</p>
    <Newsletter />
  </Layout>

export default Home
