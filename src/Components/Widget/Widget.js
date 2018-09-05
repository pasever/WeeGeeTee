import React, { Component } from 'react';
import CardsList from '../CardsList/index.js';
//import * as WidgetsDB from '../../data/index.js'
import chat from "../../Assets/images/chat.png";
import './Widget.css';


class Widget extends Component {
    // constructor(props) {
    //     super(props);
    // }

    onChatIconClick() {
        // e.preventDefault();


        console.log("hey i was clicked");

    }

    render() {
        return (
            <div>
                <h1>Widget</h1>
                <CardsList />
                <div>
                    <a className="chatIcon" onClick={ () => { this.onChatIconClick()} }><img src={ chat } alt="" width="70px" height="70px" /></a>
                </div>
            </div>
        );
    }
}
export default Widget;

