import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return <div>
    <form className="card">
        {/*<img className="card-img" src="" alt="email">*/}
        <div className="card-container">
            Email:
            <input type="checkbox" className="card-checkbox"/>
        </div>
        <input name="email" className="card-input" placeholder="example@example.com" />
        <button type="submit" className="button"
                onClick = { this.props.onWidgetClick }
                value="email"
        >Add</button>
    </form>
    <form className="card">
        {/*<img className="card-img" src="" alt="email">*/}
        <div className="card-container">
            Facebook:
            <input type="checkbox" className="card-checkbox"/>
        </div>
        <input name="facebook" className="card-input" placeholder="example@example.com" />
        <button type="submit" className="button"
                onClick = { this.props.onWidgetClick }
                value="facebook"
        >Add</button>
    </form>
    <form className="card">
        {/*<img className="card-img" src="" alt="email">*/}
        <div className="card-container">
            Twitter:
            <input type="checkbox" className="card-checkbox"/>
        </div>
        <input name="twitter" className="card-input" placeholder="example@example.com" />
        <button type="submit" className="button"
                onClick = { this.props.onWidgetClick }
                value="twitter"
        >Add</button>
    </form>
    </div>;
  }
}

export default Card;
