import React, { Component } from "react";

export default class Repositories extends Component {

  render() {
    const { repositories } = this.props;

    return (
      <div className="repositories-result">
        <h4>Your Repositories</h4>
        <h5>{repositories.length !== undefined && `You have ${repositories.length} repositories`}</h5>
        <br />
        { repositories.map(repo => {
            return(
                <div key={repo.id} id={repo.id} name={repo.name}>
                    <h3>{repo.name}</h3>
                </div>
            )
            })
        }
      </div>
    );
  }
}
