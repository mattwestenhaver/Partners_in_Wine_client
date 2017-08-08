import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import auth from './auth'

import Home from './components/Home.js'
import Fresh from './components/Fresh.js'
import Hard from './components/Hard.js'
import Blue from './components/Blue.js'
import Bloomy from './components/Bloomy.js'
import Wine from './components/Wine.js'

import MenuBar from './components/MenuBar.js'
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import LogOut from './components/LogOut.js'

class App extends Component {

  state = {
    currentUser: auth.getCurrentUser()
  }

  setCurrentUser() {
    this.setState({
      currentUser: auth.getCurrentUser()
    })
  }

  logOut() {
    auth.clearToken()
    this.setState({currentUser: null})
  }

  render() {
    const currentUser = this.state.currentUser
    return (
      <Router>
        <div className="App">
          <MenuBar currentUser={this.state.currentUser}/>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Partners In Wine...</h2>
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
          <Route path='/wine' render={ ()=> <Wine currentUser={this.state.currentUser}  /> } />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' render={() => (
            <LogIn onLogIn={this.setCurrentUser.bind(this)} />
          )}/>
          <Route path='/logout' render={() => (
            <LogOut onLogOut={this.logOut.bind(this)} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
