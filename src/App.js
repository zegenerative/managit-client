import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import queryString from 'query-string'
// import './App.css';
const id = '7b76b39a4660b1faa24d'

export default class App extends Component {

  state = {
    query: ''
  }

  componentDidMount() {
    // console.log(this.props)
    // const query = queryString.parse(this.props.location.search)
    // console.log(query)
    // this.setState({
    //   query: query.access_token
    // })
  }

  render() {

    return (
      <div>
        <button>
          <a href={`https://github.com/login/oauth/authorize?client_id=${id}`}>
            Login with github
          </a>
        </button>
        {/* <Route exact path={`/home.html?access_token=${this.state.query}`} component={ Home }/> */}
        <Route exact path={'/home.html?access_token=:accesstoken'} component={ Home }/>
      </div>
    )
  }
}
