import React from 'react';
import Card from '../Card/index.js'
import './CardsList.css';


const CardsList = props =>
    <div className="cards-container">
        {props.widgets.map( widget =>
            <Card
              onWidgetClick={ props.onWidgetClick }
              key={ widget.id }
              id={ widget.id }
              widget = { widget }
              onInputChange = { props.onInputChange }
            />
        )}
    </div>;

export default CardsList;