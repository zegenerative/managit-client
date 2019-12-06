import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
// import './App.css';

export default class App extends Component {

  render() {
      return (
        <Provider store={store}>
            <Route path='/' component={ Home }/>
            <Route path='/home/' component={ Home }/>
            <Route exact path={`/home?access_token=${this.state.token}`} component={ Home }/>
            <Login />
        </Provider>
      )
    
  }
}
