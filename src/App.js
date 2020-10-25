// global style sheet
import React, { Component } from "react";
// importing layout of Navbar.js
import Navbar from "./components/layout/Navbar"
import UserItem from "./components/users/UserItem"

import './App.css'; 
// renders app in "reactDOM render area targetting "root"

class App extends Component {
    render()  {
    return (
      <div className="App">
        {/* could pass in props here, but defaults are set in Navbar.js */}
        <Navbar />
        <UserItem />
        <h1> Hello </h1>
      </div>
      
    );
    }


}

export default App;
