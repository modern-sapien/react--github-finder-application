import React from "react";
import PropTypes from 'prop-types';

// props are properties you can pass into components from outside.
const Navbar = ({ icon, title}) => {
    return (
      <nav className="navbar bg-primary">
        <h1>
          {/* access the property of icon & title set on Navbar in App.js */}
          <i className={icon}></i> {title}
        </h1>
      </nav>
    );

}

// default props for when there is no content being passed through App.js
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
}

// Validation for inputs of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;
