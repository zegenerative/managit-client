import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SearchResult extends Component {

    componentDidMount() {

    }

    render() {
        if(this.props.repository) {
            return (
                <div>
                    <Link to={`/repo/${this.props.repository.name}`}><h5>{ this.props.repository.name }</h5></Link>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    repository: state.repository,
})

export default connect(mapStateToProps)(SearchResult)