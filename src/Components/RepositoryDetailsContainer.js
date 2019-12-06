import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchRepository } from '../Actions/actions'
import { searchCommits } from '../Actions/actions'
import RepositoryDetails from './RepositoryDetails'

class RepositoryDetailsContainer extends Component {

    state = {
        name: this.props.match.params.repo
    }

    componentDidMount() {
        this.props.searchRepository(this.props.user, this.state.name)
        this.props.searchCommits(this.props.user, this.state.name)
    }

    render() {
        return (
            <RepositoryDetails 
                repository={this.props.repository}
                commits={this.props.commits}
            />
        )
    }
}

const mapStateToProps = state => ({
    repository: state.repository,
    user: state.user,
    commits: state.commits
})

export default connect(mapStateToProps, { searchRepository, searchCommits })(RepositoryDetailsContainer)