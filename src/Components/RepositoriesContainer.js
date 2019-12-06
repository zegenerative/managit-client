import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repositories from './Repositories.js';

class RepositoriesContainer extends Component {

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
  name: state.name
})

export default connect(mapStateToProps)(RepositoriesContainer)
