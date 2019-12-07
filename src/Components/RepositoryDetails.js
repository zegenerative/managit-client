import React, { Component } from 'react'

export default class RepositoryDetails extends Component {

    render() {
        const { name, html_url, description } = this.props.repository
        const commits  = this.props.commits
        const branches = this.props.branches

        return (
            <div>
                <h1>{ name }</h1>
                <ul>
                    { description && <li>{description}</li> }
                    <li><a href={html_url}>Link to github</a></li>
                    { branches &&
                        <li>{ branches.length } Branch{ branches.length !== 1 && 'es'}: { branches.map((branch, index) => {
                            return(
                                <div key={index} id={index}>
                                    <h6>{branch.name}</h6>
                                </div>
                            )})}
                        </li>
                    } 
                    { commits &&
                        <li>{ commits.length } Commit{ commits.length !== 1 && 's'}: {commits.map((commit, index) => {
                            return(
                                <div key={index} id={commit.node_id}>
                                    <h6>{commit.commit.message}</h6>
                                </div>
                            )})}
                        </li>
                    }   
                </ul>
            </div>
        )
    }
}
