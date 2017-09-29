import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule.js'
import Search from './Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to GemmaDox MFE</h1>
        </header>
        <Search></Search>
        <Schedule></Schedule>        
      </div>
    );
  }
}

export default App;
