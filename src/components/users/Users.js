import React, { Component } from 'react';
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users: [
            {
            id: 1,
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        },
            {
            id: 2,
            login: "defunkt",
            avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
            html_url: "https://github.com/defunkt"
        },
            {
            id: 3,
            login: "pjhyett",
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            html_url: "https://github.com/pjhyett"
        },
        ]
    }

    render() {
        return (
            <div>
                {/* looking through the users in a state for each one*/}
                {this.state.users.map(user => (
                    // Each child in a list should have a unique "key" prop
                    // passing in the user object from users to UserItem
                    // we also created a "user" prop that we passing our array of objects through
                    <UserItem key={user.id} user={user}  />
                ))}
            </div>
        )
    }
}

export default Users
