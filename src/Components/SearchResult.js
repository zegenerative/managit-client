import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SearchResult extends Component {

    render() {
        if(this.props.repository) {
            return (
                <div>
                    <Link to={`/repo/${this.props.repository.name}`}><h2>{ this.props.repository.name }</h2></Link>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    repository: state.searchrepo,
})

export default connect(mapStateToProps)(SearchResult)