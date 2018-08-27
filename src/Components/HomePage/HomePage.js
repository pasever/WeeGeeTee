import React, { Component } from 'react';
import CardsList from '../CardsList/index.js';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return <div className="homePage">
        <h1>HomePage</h1>
        <h2>Express + React + Node</h2>
        <CardsList />
    </div>;
  }
}

export default HomePage;
