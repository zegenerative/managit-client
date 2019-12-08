import React, { Component } from 'react'
import logo from '../Assets/managit.png'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export default class Login extends Component {

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                > 
                <img src={logo} alt='logo' width='20%'></img>
                <h1>Managit</h1>
                <h3>Your personalized Github management</h3>
                <Button 
                    variant="contained" 
                    color="primary"
                >
                    <a href={`https://github.com/login/oauth/authorize?client_id=7b76b39a4660b1faa24d&scope=public_repo,delete_repo&`}>
                        Login with github
                    </a>
                </Button>
                </Grid>
            </div>
        )
    }
}
