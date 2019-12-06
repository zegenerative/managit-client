import React, { Component } from 'react';
import { allRepos } from '../Actions/actions'
import { connect } from 'react-redux';
import Repositories from './Repositories.js';

class RepositoriesContainer extends Component {

    componentDidMount() {
        this.props.allRepos(this.props.user)
    }

    render() {
        return (
            <Repositories
                repositories={this.props.repositories}
            />
        )
    }
}

const mapStateToProps = state => ({
    repositories: state.repositories,
    user: state.user
})

export default connect(mapStateToProps, { allRepos })(RepositoriesContainer)
