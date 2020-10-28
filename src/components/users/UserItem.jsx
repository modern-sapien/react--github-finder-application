import React, { Component } from "react";

class UserItem extends Component {
    state = {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        htm_url: "https://api.github.com/mojombo",
      };

  render() {
      const {login, avatar_url, htm_url} = this.state
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "80px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={htm_url} className="btn btn-dark btn-md my-1">
              More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
