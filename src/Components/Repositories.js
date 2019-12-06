import React, { Component } from "react";

export default class Repositories extends Component {

  render() {
    const { repositories } = this.props;
    const searchedItems = repositories.items


    return (
      <div className="repositories-result">
        <h4>Repositories</h4>
        <h5>{repositories.total_count !== undefined && `You found ${repositories.total_count} repositories`}</h5>
        <br />
      </div>
    );
  }
}
