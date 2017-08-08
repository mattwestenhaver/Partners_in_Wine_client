import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import auth from './auth'

import Home from './components/Home.js'
import Fresh from './components/Fresh.js'
import Hard from './components/Hard.js'
import Blue from './components/Blue.js'
import Bloomy from './components/Bloomy.js'

import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'

class App extends Component {

  state = {
    currentUser: auth.getCurrentUser()
  }

  setCurrentUser() {
    this.setState({
      currentUser: auth.getCurrentUser()
    })
  }

  render() {
    const currentUser = this.state.currentUser
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Partners In Wine...</h2>
            <ul className="navBar">
              <div>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/login'>Log In</NavLink></li>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
              </div>
            </ul>
          </div>
          {currentUser
            ? <p>welcome, {currentUser.name}!</p>
            : <p>log in or sign up!</p>
          }
          <Route exact path='/' component={Home} />
          <Route path='/fresh' component={Fresh} />
          <Route path='/hard' component={Hard} />
          <Route path='/blue' component={Blue} />
          <Route path='/bloomy' component={Bloomy} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' render={() => (
            <LogIn onLogIn={this.setCurrentUser.bind(this)} />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
