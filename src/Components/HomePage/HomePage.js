import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return <div className="homePage">
        <h1>HomePage</h1>
        <h2>Express + React + Node</h2>
        <h3><a href="/widget">Widgets</a></h3>
    </div>;
  }
}

export default HomePage;
