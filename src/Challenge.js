import React, { Component } from 'react';

import { Layout } from './components/Layout.js';

// images
import jaxx01 from './jaxx/01.PNG';
import jaxx02 from './jaxx/02.PNG';
import jaxx03 from './jaxx/03.PNG';
import jaxx04 from './jaxx/04.PNG';
import jaxx05 from './jaxx/05.PNG';
import jaxx06 from './jaxx/06.PNG';
import jaxx07 from './jaxx/07.PNG';
import jaxx08 from './jaxx/08.PNG';
import jaxx09 from './jaxx/09.PNG';
import jaxx10 from './jaxx/10.PNG';
import jaxx11 from './jaxx/11.PNG';
import jaxx12 from './jaxx/12.PNG';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.show = this.show.bind(this);
  }

  show(step) {
    const tag = 'show' + step;
    this.setState({ [tag]: !this.state[tag] });
  }

  hiddenContent(step) {
    return (
      <span>
        (<a
          href="#"
          onClick={e => {
            this.show(step);
            e.preventDefault();
          }}
        >
          {this.state['show' + step] ? 'hide' : 'show'} details
        </a>)
        {this.state['show' + step]
          ? <div>
              {Steps[step]()}
              (<a
                href="#"
                onClick={e => {
                  this.show(step);
                  e.preventDefault();
                }}
              >
                {this.state['show' + step] ? 'hide' : 'show'} details
              </a>)
            </div>
          : null}
      </span>
    );
  }

  render() {
    return (
      <Layout activeTab="challenge">
        <h2>
          Solve the Maiden Challenge and we'll give you $10 for being awesome.
        </h2>
        <p>
          The Maiden Challenge walks you through the steps of setting up your
          own wallet to send and receive cryptocurrency.
        </p>

        <h2 className="button dark">
          <span>Maiden Challenge I:</span> Claiming your identity
        </h2>
        <div className="left">
          <ol>
            <li>
              Download Jaxx mobile app
              <ul>
                <li>
                  <a
                    href="https://itunes.apple.com/us/app/jaxx-bitcoin-ethereum-wallet/id1084514516?mt=8"
                    target="_blank"
                  >
                    iOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kryptokit.jaxx&hl=en"
                    target="_blank"
                  >
                    Android
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Create a new wallet with Jaxx {this.hiddenContent(2)}
            </li>
            <li>
              Scan paper wallet to import ETH {this.hiddenContent(3)}
            </li>
            <li>Send 0.001 ETH to claim address</li>
          </ol>
        </div>
      </Layout>
    );
  }
}

const Steps = {
  '2': () =>
    <div className="pad">
      <img src={jaxx01} className="pad" />
      <img src={jaxx02} className="pad" />
      <img src={jaxx03} className="pad" />
      <img src={jaxx04} className="pad" />
      <img src={jaxx05} className="pad" />
      <img src={jaxx06} className="pad" />
    </div>,

  '3': () =>
    <div className="pad">
      <img src={jaxx07} className="pad" />
      <img src={jaxx08} className="pad" />
      <img src={jaxx09} className="pad" />
      <img src={jaxx10} className="pad" />
      <img src={jaxx11} className="pad" />
      <img src={jaxx12} className="pad" />
    </div>
};

export default Challenge;
