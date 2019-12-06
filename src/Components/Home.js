import React, { Component } from 'react'
import request from 'superagent'
import queryString from 'query-string'
import { connect } from 'react-redux'
import store from '../store'
import RepositoriesContainer from './RepositoriesContainer'
import SearchBarContainer from './SearchBarContainer'
import SearchResult from './SearchResult'

class Home extends Component {

    componentDidMount() {
        const query = queryString.parse(this.props.location.search)
        const token = query.access_token
        store.dispatch({
            type: 'LOGIN',
            payload: token
        })

        if(query) {
            request
                .get('https://api.github.com/user')
                .set('Authorization', `token ${token}`) 
                .then(res => {
                    store.dispatch({
                        type: 'USER',
                        payload: res.body.login
                    })
                })
                .catch(err => console(err))
        }
    }

    render() {
        if(this.props.name !== '') {
            return (
                <div>
                    <h1>Welcome { this.props.name }</h1>
                    <SearchBarContainer />
                    <SearchResult />
                    <RepositoriesContainer />
                </div>
            )
        } else {
            return (
                <div>
                    Please login
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    name: state.user
})
  
export default connect(mapStateToProps)(Home)
  
