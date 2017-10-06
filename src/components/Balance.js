import React, { Component } from 'react';
import Layout from './Layout.js';

// use global Web3 because yarn build fails on web3 in src
const Web3 = window.Web3;
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/tBZ5seblTdsWRfzyNu9j'
  )
);

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

export default Balance