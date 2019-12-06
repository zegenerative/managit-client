import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import RepositoryDetailsContainer from './Components/RepositoryDetailsContainer'
// import './App.css';

export default class App extends Component {

  render() {
      return (
        <div>
          <Login />
          <Route path='/home' component={ Home }/>
          <Route path="/repo/:repo" component={ RepositoryDetailsContainer } />
        </div>
      )
  }
}
