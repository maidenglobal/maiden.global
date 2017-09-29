import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Challenge from './components/Challenge.js';
import Challenge1 from './components/Challenge1.js';
import Challenge2 from './components/Challenge2.js';
import Challenge3 from './components/Challenge3.js';
import Challenge4 from './components/Challenge4.js';
import Challenge5 from './components/Challenge5.js';
import Challenge6 from './components/Challenge6.js';
import About from './components/About.js';
import Balance from './components/Balance.js';
import Meet from './components/Meet.js';

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/challenge1" component={Challenge1} />
      <Route path="/challenge2" component={Challenge2} />
      <Route path="/challenge3" component={Challenge3} />
      <Route path="/challenge4" component={Challenge4} />
      <Route path="/challenge5" component={Challenge5} />
      <Route path="/challenge6" component={Challenge6} />
      <Route path="/about" component={About} />
      <Route path="/balance" component={Balance} />
      <Route path="/meet" component={Meet} />
    </div>
  </Router>;

export default App;
