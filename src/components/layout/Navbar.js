import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    static defaultProps = {
        title: "Github Loser",
        icon: "fab fa-github"
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}></i>  {this.props.title}
                </h1>
            </nav>
        )
    }
}

