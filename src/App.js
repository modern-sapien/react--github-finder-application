// global style sheet
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // using async await to make the axios call and console log the response data
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          {/* passing down the array of objets to Users */}
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
