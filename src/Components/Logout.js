import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
// const authorization_id = 1

class Logout extends Component {

    handleClick = () => {
        request
            .get(`https://api.github.com/authorizations`)
            .set('Authorization', `token ${this.props.token}`) 
            .set('UserAgent', 'Managit')
            .set('Accept', 'application/json')
            .then(res => {
                console.log('logged out:', res)
            })
            .catch(err => console.log(err))
        // request
        //     .delete(`https://api.github.com/authorizations/${authorization_id}`)
        //     .set('Authorization', `token ${this.props.token}`) 
        //     .set('UserAgent', 'Managit')
        //     .then(res => {
        //         console.log('logged out:', res)
        //     })
        //     .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {/* <a href={`https://github.com/logout`}> */}
                        Logout
                    {/* </a> */}
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.login
})

export default connect(mapStateToProps)(Logout)
