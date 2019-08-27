import React, { Component } from 'react';
import './App.css';
// import Home from './components/Home';
import Routes from './route/Routes';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to Arena antaris</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      // <Home msg="Tampilan Home"/>
      <Routes/>
    );
  }
}

export default App;
