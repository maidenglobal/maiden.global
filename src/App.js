import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// images
import logo from './MaidenLogo_500px.png';
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

const Layout = ({ children, activeTab }) =>
  <div className="root">
    <div className="center">
      <nav>
        <Link
          to="/"
          className={activeTab === 'home' ? 'active button' : 'button'}
        >
          <span>Home</span>
        </Link>
        <Link
          to="/challenge"
          className={activeTab === 'challenge' ? 'active button' : 'button'}
        >
          <span>Maiden Challenge</span>
        </Link>
        <Link
          to="/balance"
          className={activeTab === 'balance' ? 'active button' : 'button'}
        >
          <span>Check Balance</span>
        </Link>
      </nav>
      <header>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <section>
        {children}
      </section>
    </div>
  </div>;

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
