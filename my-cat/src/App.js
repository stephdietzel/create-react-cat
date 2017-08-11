import React, { Component } from 'react';
import cat1 from './img/SetState.png';
import cat2 from './img/ComponentDidMount.png';
import cat3 from './img/ComponentWillUnmount.png';
import './App.css';

class App extends Component {
  render() {
    var catNum = Math.floor(Math.random()*3);
    var cat = cat1;
    if (catNum === 1) { cat = cat2;}
    if (catNum === 2) { cat = cat3;}

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
