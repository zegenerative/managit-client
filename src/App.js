import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import queryString from 'query-string'
// import './App.css';
const id = '7b76b39a4660b1faa24d'

export default class App extends Component {

  state = {
    token: ''
  }

  componentDidMount() {
    if(this.props.location) {
      const query = queryString.parse(this.props.location.search)
      const token = query.access_token
      this.setState({
        token,
      })
    }
  }

  render() {

    return (
      <div>
        <button>
          <a href={`https://github.com/login/oauth/authorize?client_id=${id}`}>
            Login with github
          </a>
        </button>
        <Route path='/' component={ Home }/>
        <Route path='/home/' component={ Home }/>
        <Route exact path={`/home?access_token=${this.state.token}`} component={ Home }/>
      </div>
    )
  }
}
