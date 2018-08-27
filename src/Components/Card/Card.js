import React, { Component } from 'react';

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
      </form>
    </div>;
  }
}

export default Card;
