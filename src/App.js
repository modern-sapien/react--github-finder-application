// global style sheet
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //method as part of a class
  hello = () => "this.hello()"

  render()  {
      const name = "John Doe";
      const goodbye = () => "goodbye()"

    return (
      <div className="App">
        <h2>{name}</h2>
        <h1>{this.hello()}</h1>
        <h2>{goodbye()}</h2>
      </div>
    );
    }


}

export default App;
