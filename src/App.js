import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Link to="https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID">
          <button>
            Login with github
          </button>
        </Link>
      </div>
    )
  }
}
