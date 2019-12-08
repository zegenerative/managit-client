import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Repositories extends Component {

  render() {
    const { repositories } = this.props;

    return (
      <div className="repositories-result">
        <h4>{repositories.length !== undefined && `You have ${repositories.length} repositories:`}</h4>
        { repositories.map(repo => {
            return(
                <div key={repo.id} id={repo.id} name={repo.name}>
                    <Link to={`/repo/${repo.name}`}><h3>{ repo.name }</h3></Link>
                </div>
            )
        })}
      </div>
    );
  }
}
