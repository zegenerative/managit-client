import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Components/Home'
import Login from './Components/Login'
import RepositoryDetailsContainer from './Components/RepositoryDetailsContainer'
import Logout from './Components/Logout'
// import './App.css';

class App extends Component {

  render() {
      return (
        <div>
          { this.props.user? <Logout /> : <Login /> }
          <Route path='/home' component={ Home }/>
          <Route path="/repo/:repo" component={ RepositoryDetailsContainer } />
        </div>
      )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App)
