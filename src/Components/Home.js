import React, { Component } from 'react'
import request from 'superagent'
import queryString from 'query-string'
import { connect } from 'react-redux'
import store from '../store'
import RepositoriesContainer from './RepositoriesContainer'
import SearchBarContainer from './SearchBarContainer'
import SearchResult from './SearchResult'
import RepoFormContainer from './RepoFormContainer'
import DeleteRepoContainer from './DeleteRepoContainer'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'

class Home extends Component {

    componentDidMount() {
        const query = queryString.parse(this.props.location.search)
        const token = query.access_token
        store.dispatch({
            type: 'LOGIN',
            payload: token
        })

        if(query) {
            request
                .get('https://api.github.com/user')
                .set('Authorization', `token ${token}`) 
                .then(res => {
                    store.dispatch({
                        type: 'USER',
                        payload: res.body.login
                    })
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        if(this.props.name !== '') {
            return (
                <div>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                    <h1>Welcome { this.props.name }</h1>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        p={10}
                        // alignItems="center"
                    >
                    <Box 
                        m={3}
                    >
                        <SearchBarContainer />
                    </Box>
                    <Box 
                        m={3}
                    >
                        <RepoFormContainer />
                    </Box>
                    <Box 
                        m={3}
                    >
                        <DeleteRepoContainer />
                    </Box>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                    <SearchResult />
                    <RepositoriesContainer />
                    </Grid>
                </div>
            )
        } else {
            return (
                <div>
                    Please login
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    name: state.user
})
  
export default connect(mapStateToProps)(Home)
  
