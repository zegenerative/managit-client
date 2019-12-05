import React, { Component } from 'react'
import request from 'superagent'
import queryString from 'query-string'

export default class Home extends Component {

    state = {
        name: ''
    }

    componentDidMount() {
        // const query = window.location.search.substring(1)
        const query = queryString.parse(this.props.location.search)
        // const token = query.split('access_token=')[1]
        const token = query.access_token
        console.log('query:', query, 'token:', token)
        if(query) {
            request
                .get('https://api.github.com/user')
                .set('Authorization', `token ${token}`) 
                .then(res => {
                    this.setState({
                        name: res.body.login
                    })
                })
        }
    }

    render() {
        if(this.state.name !== '') {
            return (
                <div>
                    Welcome { this.state.name }
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
