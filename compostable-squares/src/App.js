import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Square extends Component {
//   render() {
//     return React.createElement('div', )
//   }
// }

const Square = (props) => {
  const text = props;
  return (
    <div className={ props.bgcolor } >
      <h2>{ text.text }</h2>
    </div>
  );
}

class App extends Component {
  render() {
    return React.createElement('div', null, 
      React.createElement(Square, {text: 'white on blue', bgcolor: 'blue'}),
      React.createElement(Square, {text: 'blue on red', bgcolor: 'red'}),
      React.createElement(Square, {text: 'green on pink', bgcolor: 'pink'})
    )
    // return (
      
    // );
  }
}

export default App;
