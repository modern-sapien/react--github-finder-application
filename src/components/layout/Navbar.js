import React, { Component } from "react";
// props are properties you can pass into components from outside.
export class Navbar extends Component {
// default props for when there is no content being passed through App.js
    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github"
    }

    render() {

    return (
      <nav className="navbar bg-primary">
        <h1>
          {/* access the property of icon & title set on Navbar in App.js */}
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
