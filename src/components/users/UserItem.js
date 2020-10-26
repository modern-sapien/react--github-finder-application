import React from "react";
import PropTypes from 'prop-types';

// using a function and passing in props, removes our need to use a class
const UserItem = ({user: { login, avatar_url, html_url }}) => {
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
        <a href={html_url} className="btn btn-dark btn-md my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  // ptor // for array ptar
  user: PropTypes.object.isRequired
}

export default UserItem;
