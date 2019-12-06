import React, { Component } from 'react'

export default class RepositoryDetails extends Component {

    render() {
        const { name, html_url, description } = this.props.repository
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    { description && <li>{description}</li> }
                    <li><a href={html_url}>Link to github</a></li>
                    <li>Commits:{this.props.commits.map((commit, index) => {
                        return(
                            <div key={index} id={commit.id}>
                                <h6>{commit.sha}</h6>
                            </div>
                        )
                    })}</li>
                </ul>
            </div>
        )
    }
}
