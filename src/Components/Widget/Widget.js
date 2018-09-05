import React, { Component } from 'react';
import CardsList from '../CardsList/index.js';
import * as WidgetsDB from '../../data/index.js'
import './Widget.css';

class Widget extends Component {
  render() {
    return <div>
       <h1>Widget</h1>
        <CardsList />
    </div>;
  }
}

export default Widget;

