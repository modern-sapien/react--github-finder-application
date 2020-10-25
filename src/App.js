// global style sheet
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"

import './App.css'; 
// renders app in "reactDOM render area targetting "root"
// have to extend CORE react component.

class App extends Component {
    render()  {
    return (
      <div className="App">
        <Navbar />
        <h1> Hello </h1>
      </div>
      
    );
    }


}

export default App;
