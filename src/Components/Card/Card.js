import React, { Component } from 'react';
import './Card.css'

class Card extends Component {


    render() {
        return <div>
        <form className="card">
            {/*<img className="card-img" src="" alt="email">*/}
            <div className="card-container">
                { this.props.widget.name.toUpperCase() }
                <input type="checkbox" className="card-checkbox"/>
            </div>
            <input name="email" className="card-input" placeholder="example@example.com" />
            <button type="submit" className="button"
                    onClick = { this.props.onWidgetClick }
                    value={ this.props.widget.name }
            >Add</button>
        </form>
        </div>;
      }
}

export default Card;
