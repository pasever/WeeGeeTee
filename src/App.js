import React, { Component } from 'react';
import Routes from './routes';
import Navbar from './Components/Navbar/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <Navbar />
          </header>
          <main className="App-main">
              <Routes />
          </main>
      </div>
    );
  }
}

export default App;
