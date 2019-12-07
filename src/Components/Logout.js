import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
const authorization_id = 1

class Logout extends Component {

    state = {
        logout: ''
    }

    handleClick = async () => {
        const logout = await request
            .delete(`https://api.github.com/authorizations/${authorization_id}`)
            .set('Authorization', `token ${this.props.token}`) 
            .set('UserAgent', 'Managit')
            .then(res => {
                console.log('response from delete request:', res)
                return res
            })
            .catch(err => console.log(err)) 
        this.setState({
            logout, 
        })
    }

    render() {
        if(this.state.logout) {
            return (
                <Redirect to='https://github.com/logout' />
            )
        } 
        return (
            <div>
                <button onClick={this.handleClick}>
                    <a href={`https://github.com/logout`}>
                        Logout
                    </a>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.login
})

export default connect(mapStateToProps)(Logout)
