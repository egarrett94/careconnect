import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Home from './Home.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      poem: null
    }
  }

  componentDidMount() {
    axios.get('/index')
    .then(res => {
      this.setState({poem: res.data[0].lines})
    }).catch(err => console.log(err));
    
    axios.get('/users/users')
    .then(res => {
      this.setState({users: res.data})
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Home />
        {this.state.poem}
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
