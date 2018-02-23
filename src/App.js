import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tiles from './Tiles';
import Nav from './Nav';
import Main from './Main';
import Items from './Items'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tiles />
        <Nav />
        <Main />
        <Items />
      </div>
    );
  }
}

export default App;