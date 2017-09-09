import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Challenge from './Challenge.js';
import { Layout } from './components/Layout.js';

// use global Web3 because yarn build fails on web3 in src
const Web3 = window.Web3;
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/tBZ5seblTdsWRfzyNu9j'
  )
);

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/balance" component={Balance} />
    </div>
  </Router>;

const Home = () =>
  <Layout activeTab="home">
    <h2 className="intro">
      Maiden is dedicated to diversifying the leaders and makers of Finance and
      Blockchain technology through tech education, cultural events, and
      diversity-powered blockchain consulting.
    </h2>
    <div id="mc_embed_signup">
      <form
        action="//global.us16.list-manage.com/subscribe/post?u=ab555efa78384cd5d0537ee96&amp;id=cebbfa7890"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          {
            // <label htmlFor="mce-EMAIL"></label><br/>
          }
          <input
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_ab555efa78384cd5d0537ee96_cebbfa7890"
              tabIndex="-1"
              value=""
            />
          </div>
          <div>
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button dark"
            />
          </div>
        </div>
      </form>
    </div>
  </Layout>;

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // address: '0x304cc179719bc5b05418d6f7f6783abe45d83090',
    };

    this.changeAddress = this.changeAddress.bind(this);

    // fetch ETH price
    fetch('https://etherchain.org/api/basic_stats')
      .then(res => res.json())
      .then(({ data: { price } }) => {
        this.setState({ price });
      })
      .catch(console.error);
  }

  changeAddress(event) {
    const that = this;

    this.setState({
      address: event.target.value,
      result: null,
      error: false,
      loading: false
    });

    if (event.target.value.trim() === '') {
      return;
    } else if (!web3.utils.isAddress(event.target.value)) {
      this.setState({ error: true });
    } else {
      this.setState({ loading: true });
      web3.eth
        .getBalance(event.target.value)
        .then(balance => {
          that.setState({
            loading: false,
            result: web3.utils.fromWei(balance).toString()
          });
        })
        .catch(console.error);
    }
  }

  render() {
    return (
      <Layout activeTab="balance">
        <h2>Check your Ether balance:</h2>
        <form>
          <input
            className={'address ' + (this.state.error ? 'error' : '')}
            type="text"
            placeholder="Enter your Ether address"
            value={this.state.address}
            onChange={this.changeAddress}
          />
          {this.state.loading
            ? <p>loading...</p>
            : this.state.result
              ? <div className="text-giant vspace">
                  <div>
                    {Math.round(this.state.result * 1000) / 1000} ETH
                  </div>
                  <div className="text-dim">
                    {this.state.price
                      ? '$' +
                        Math.round(
                          +this.state.price.usd * this.state.result * 100
                        ) /
                          100
                      : null}
                  </div>
                </div>
              : null}
        </form>
      </Layout>
    );
  }
}
export default App;
