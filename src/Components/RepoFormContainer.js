import React from 'react'
import { connect } from 'react-redux'
import { createRepo } from '../Actions/actions'
import RepoForm from './RepoForm'
import Grid from '@material-ui/core/Grid'

class RepoFormContainer extends React.Component {

  state = { 
    name: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        name: '',
        description: '',
    })
    this.props.createRepo(this.state)
  }

  render() {
        return (
            <div>
                <RepoForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
            </div>
        )
    }
}


function mapStateToProps (state) {
  return { 
        user: state.user
    }
}

export default connect(mapStateToProps, { createRepo })(RepoFormContainer)