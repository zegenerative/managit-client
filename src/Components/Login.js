import React, { Component } from 'react'

export default class Login extends Component {

    render() {
        return (
            <div>
                <button>
                    <a href={`https://github.com/login/oauth/authorize?client_id=7b76b39a4660b1faa24d&scope=public_repo`}>
                        Login with github
                    </a>
                </button>
            </div>
        )
    }
}
