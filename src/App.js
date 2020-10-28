// global style sheet
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"

class App extends Component {
  //method as part of a class

  render()  {
    return (
      <div className="App">
        <Navbar /> 
        <Users />
        <h1>Hello</h1>
      </div>
    );
    }


}

export default App;
