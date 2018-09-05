import React, { Component } from 'react';
import Card from '../Card/index.js'
import './CardsList.css';

class CardsList extends Component {
    render() {
        return (
            <div className="cards-container">
                <Card />
            </div>
        );
    }
}

export default CardsList;