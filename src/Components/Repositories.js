import React, { Component } from "react";

export default class Repositories extends Component {

  render() {
    const { repositories } = this.props;

    return (
      <div className="repositories-result">
        <h4>{repositories.length !== undefined && `You have ${repositories.length} repositories:`}</h4>
        { repositories.map(repo => {
            return(
                <div key={repo.id} id={repo.id} name={repo.name}>
                    <h6>{repo.name}</h6>
                </div>
            )
            })
        }
      </div>
    );
  }
}
