import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repositories from './Repositories';

class RepositoriesContainer extends Component {

  render() {
    return (
    <RepositoriesContainer
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
