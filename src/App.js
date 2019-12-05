import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import queryString from 'query-string'
// import './App.css';
const id = '7b76b39a4660b1faa24d'

export default class App extends Component {

  render() {

    return (
      <div>
        <button>
          <a href={`https://github.com/login/oauth/authorize?client_id=${id}`}>
            Login with github
          </a>
        </button>
        <Route path='/' component={ Home }/>
        <Route path='/home?access_token=:access_token' component={ Home }/>
      </div>
    )
  }
}
