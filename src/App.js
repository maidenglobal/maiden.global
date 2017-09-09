import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Challenge from './components/Challenge.js';
import Balance from './components/Balance.js';

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/balance" component={Balance} />
    </div>
  </Router>;

export default App;
