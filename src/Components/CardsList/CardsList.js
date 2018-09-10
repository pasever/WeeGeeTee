import React, { Component } from 'react';
import Card from '../Card/index.js'
import './CardsList.css';


const CardsList = props =>
    <div className="cards-container">
        { console.log(props) }
        <Card
          onWidgetClick={ props.onWidgetClick }
        />
    </div>;

export default CardsList;