import React from 'react'
import { connect } from 'react-redux'
import { deleteRepo, allRepos } from '../Actions/actions'
import DeleteRepo from './DeleteRepo'
import Grid from '@material-ui/core/Grid'

class DeleteRepoContainer extends React.Component {

  state = { 
    name: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({
        name: ''
    })
    await this.props.deleteRepo(this.state)
    this.props.allRepos(this.props.user)
  }

  render() {
        return (
            <div>
                <DeleteRepo
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

export default connect(mapStateToProps, { deleteRepo, allRepos })(DeleteRepoContainer)