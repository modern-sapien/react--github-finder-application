import React, { Component } from 'react';
import PropTypes from 'prop-types'

// props are passed from default props OR app.js in this case
// destructured within a callback function and called within a return of JSX
const Navbar = ({icon, title}) => {  
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}></i>  {title}
                </h1>
            </nav>
        )
    }

    Navbar.defaultProps = {
        title: "Github Loser",
        icon: "fab fa-github"
    }

    Navbar.propTypes ={
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

export default Navbar;