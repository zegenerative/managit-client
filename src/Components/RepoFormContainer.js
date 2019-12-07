import React from 'react'
import { connect } from 'react-redux'
import { createRepo } from '../Actions/actions'
import RepoForm from './RepoForm'
import Grid from '@material-ui/core/Grid'

class RepoFormContainer extends React.Component {

  redirect = false;

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
    this.redirect = true
  }

  render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <RepoForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
                </Grid>
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