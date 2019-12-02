import React, { Component } from 'react'
import request from 'superagent'

export default class Home extends Component {

    state = {
        name: ''
    }

    componentDidMount() {
        const query = window.location.search.substring(1)
        const token = query.split('access_token=')[1]
        // Call the user info API using the fetch browser library
        request
            .get('https://api.github.com/user')
            // .set('Authorization', `Bearer ${token}`)
            .set('Authorization', `token ${token}`) 
            .then(res => {
                console.log(res)
                // Once we get the response (which has many fields)
                // Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user
                // Write "Welcome <user name>" to the documents body
                // const nameNode = document.createTextNode(`Welcome, ${res.name}`)
                // document.body.appendChild(nameNode)
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
                    Loading...
                </div>
            )
        }
    }
}
