import React from 'react';
import Layout from './Layout.js';
import Script from 'react-load-script'

export default () =>
  <Layout activeTab="challenge">
    <h2>Schedule</h2>
    <div className='left vspace-lg'>
      <div className="calendly-inline-widget" data-url="https://calendly.com/maiden/30min" style={{minWidth: '320px', height: '580px'}}></div>
    </div>
    <Script
      url="https://assets.calendly.com/assets/external/widget.js"
      />
  </Layout>
