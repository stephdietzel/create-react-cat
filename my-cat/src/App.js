import React, { Component } from 'react';
import cat from './img/SetState.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cat} className="App-logo" alt="logo" />
          <h2>Welcome to React Cats</h2>
        </div>
      </div>
    );
  }
}

export default App;
