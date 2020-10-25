// global style sheet
import React, { Component } from "react";
// importing layout of Navbar.js
import Navbar from "./components/layout/Navbar"

import './App.css'; 
// renders app in "reactDOM render area targetting "root"

class App extends Component {
    render()  {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <h1> Hello </h1>
      </div>
      
    );
    }


}

export default App;
