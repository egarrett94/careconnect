import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Signup from './Signup.js';
import UserProfile from './UserProfile.js';
import HelperLogin from './HelperLogin.js';
import PatientLogin from './PatientLogin.js';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: {}
    }

    //binding
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)

  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    console.log('log out')
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {}})
  }

  componentDidMount() {
    //immediately sets token to mernToken if there is one there
    var token = localStorage.getItem('mernToken')
    //checks to see if something got fucked with the token 
    //and if it did, it resets the state.token to blank
    //if it's a valid thing, it'll create it. and reset the localStorage
    if (token === 'undefined' || token === null || token === '' || token === undefined ){
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      //reauthenticate this token
      axios.post('/auth/me/from/token', {
        token: token
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch(err => console.log(err))
    }
  }



  render() {
    console.log(this.state.user)
    
    let theUser = this.state.user
    //if the type of theUser is an object and there's a length,
    //then the user is logged in and can see the user profile + logout link. 
    //otherwise it shows the log in / sign up link 
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        <div>
          user logged in
          <UserProfile user={this.state.user} logout={this.logout} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <HelperLogin liftToken={this.liftTokenToState}/>
          <PatientLogin liftToken={this.liftTokenToState}/>
          <Signup liftToken={this.liftTokenToState}/>
        </div>
      )
    }
  }
}

export default App;
