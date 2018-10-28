import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';


class App extends Component {
  d = new Date()
  

  // myTimer() {
  //   var d = new Date();
  //   return d;
  // }

  // // myVar = setInterval(this.myTimer, 1000);

  state = {
    time: this.d.toLocaleTimeString()
  }

  render() {
    return (
      <h1>The time is: {this.state.time}</h1>
    );
  }
}

export default App;
