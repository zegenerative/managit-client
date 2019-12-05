import React, { Component } from 'react'
import request from 'superagent'

export default class Home extends Component {

    state = {
        name: ''
    }

    componentDidMount() {
        const query = window.location.search.substring(1)
        const token = query.split('access_token=')[1]
        console.log('query:', query, 'token:', token)
        request
            .get('https://api.github.com/user')
            .set('Authorization', `token ${token}`) 
            .then(res => {
                this.setState({
                    name: res.body.login
                })
        })
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
