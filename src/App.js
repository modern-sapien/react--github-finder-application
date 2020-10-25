// global style sheet
import React, { Component } from "react";

import './App.css'; 
// renders app in "reactDOM render area targetting "root"
// have to extend CORE react component.

class App extends Component {
    // notice how scoping with THIS effects how you call it into a function
    foo2 = () => "bars"
    // render runs when component is loaded
    // render is a life cycle method & renders the output

    render()  {
    const name = "John Doe";
    const loading = false;
    const showName = false;
    // calling a function 
    const foo = () => "bar"

    return (
      <div className="App">
        {/* if loading, display loading else hello // if showname is true, display name else null */}
        {loading ? <h4>Loading...</h4> : <h1> Hello {showName && name} </h1>}
        {/* elements can only have one parent element */}
        {/* any javascript method can go between the curly bracket */}
        <h1>Hello from { name.toUpperCase()}</h1>
        <h1>Hello {foo()}</h1>
        <h1>Hello {this.foo2()}</h1>
      </div>
      
    );
    }


}

export default App;
