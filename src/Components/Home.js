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
            .set('Authorization', `Bearer ${token}`)
            // .set('Authorization', `token ${token}`) (this was from the medium article, AFAIK should use `Bearer token`)
            .then(res => res.json())
            .then(res => {
                // Once we get the response (which has many fields)
                // Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user
                // Write "Welcome <user name>" to the documents body
                // const nameNode = document.createTextNode(`Welcome, ${res.name}`)
                // document.body.appendChild(nameNode)
                this.setState({
                    name: res.name
                })
        })
    }

    render() {
        return (
            <div>
                Welcome { this.name } 
            </div>
        )
    }
}
