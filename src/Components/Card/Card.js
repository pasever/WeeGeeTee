import React, { Component } from 'react';
import './Card.css'
import email from '../../Assets/images/email.svg';

class Card extends Component {

    onInputChange(event) {
        this.props.onInputChange(event.target.value);
    }

    render() {
        return <div>
        <form className="card">
            <img src={ email } className="card-img" alt="" />
            <div className="card-container">
                { this.props.widget.name.toUpperCase() }
                <input type="checkbox" className="card-checkbox"/>
            </div>
            <div className="card-data">
                <input
                    name={ this.props.widget.name }
                    className="card-input"
                    placeholder="example@example.com"
                    onChange={ this.onInputChange.bind(this) }
                />
                <button type="submit" className="button"
                        onClick = { this.props.onWidgetClick }
                        value={ this.props.widget.name }
                >Add</button>
            </div>
        </form>
        </div>;
      }
}

export default Card;
