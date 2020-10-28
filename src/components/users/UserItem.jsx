import React from "react";

// UserItem is equal to a call back function with the properties of User passed from User
// These are then destructured in the callback function to be called in the return of UserItem
const UserItem = ({user: {login, avatar_url, htm_url}}) => {

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
};

export default UserItem;