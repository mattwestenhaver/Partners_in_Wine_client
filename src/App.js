import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

import Home from './components/Home.js'
import Fresh from './components/Fresh.js'
import Hard from './components/Hard.js'
import Blue from './components/Blue.js'
import Bloomy from './components/Bloomy.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Partners In Wine...</h2>
            <h3><NavLink to='/'>Home</NavLink></h3>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/fresh' component={Fresh} />
          <Route path='/hard' component={Hard} />
          <Route path='/blue' component={Blue} />
          <Route path='/bloomy' component={Bloomy} />
        </div>
      </Router>
    );
  }
}

export default App;
