import React, { Component } from 'react';
import CardsList from '../CardsList/index.js';
//import * as WidgetsDB from '../../data/index.js'
import chat from "../../Assets/images/chat.png";
import './Widget.css';
// import $ from "jquery";


class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets: [],
            error: null,
            currentWidget: ''
        }

    }


    onChatIconClick() {

    }

    generateNewWidget (widget) {
        console.log(widget);
    }

    onWidgetClick (event) {
        event.preventDefault();
        // this.state.currentWidget = e.target.value;
        console.log(event.target.value);
        //this.generateNewWidget(event.target.value);
    }

    render() {
        return (
            <div>
                <h1>Widget</h1>
                <CardsList onWidgetClick = { this.onWidgetClick }/>
                <div className="chatIconList">
                    <a className="chatIcon" onClick={ () => { this.onChatIconClick()} }><img src={ chat } alt="" width="70px" height="70px" /></a>
                </div>
            </div>
        );
    }
}
export default Widget;

