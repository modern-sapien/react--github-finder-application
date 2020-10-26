import React, { Component } from "react";

class UserItem extends Component {
// not using a constructor 
  render() {
      //destructuring values from this.props.user
      const { login, avatar_url, html_url} = this.props.user

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="mojombo profile"
          className="round-img"
          style={{ width: "80px" }}
        />

        <h2>{login}</h2>

        <div>
            <a href={html_url} className="btn btn-dark btn-md my-1">More</a></div>
      </div>
    );
  }
}

export default UserItem;
