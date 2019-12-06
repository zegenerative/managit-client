import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRepository } from '../Actions/actions';
import SearchBar from './SearchBar'

class SearchBarContainer extends Component {

  state = {
    name: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.searchRepository(this.props.user, this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
        <SearchBar
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
        />
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  name: state.name,
  user: state.user
})

export default connect(mapStateToProps, { searchRepository })(SearchBarContainer)
