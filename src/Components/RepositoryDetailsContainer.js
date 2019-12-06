import React, { Component } from 'react'
import { connect } from 'react-redux'
import { oneRepo } from '../Actions/actions'

class RepositoryDetailsContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repositories: state.repositories,
    repository: state.repository,
    user: state.user
})

export default connect(mapStateToProps, { oneRepo })(RepositoryDetailsContainer)