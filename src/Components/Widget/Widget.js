import React, { Component } from 'react';
import CardsList from '../CardsList/index.js';
import WidgetsDB from '../../data/index.js'
import chat from "../../Assets/images/chat.png";
import './Widget.css';


class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets: WidgetsDB,
            error: null,
            currentWidget: null
        };

        this.onWidgetClick = this.onWidgetClick.bind(this);

    }

    onChatIconClick() {

    }

    generateNewWidget () {
        console.log(this.state.currentWidget);
    }

    onWidgetClick (event) {
        event.preventDefault();
        console.log(event.target);
        this.setState({ currentWidget: event.target.value });
        this.generateNewWidget();
    }

    render() {
        return (
            <div>
                { console.log( this.state) }
                <h1>Widget</h1>
                <CardsList
                    onWidgetClick = { this.onWidgetClick }
                    widgets={ this.state.widgets }
                />
                <div className="chatIconList">
                    <a className="chatIcon" onClick={ () => { this.onChatIconClick()} }><img src={ chat } alt="" width="70px" height="70px" /></a>
                </div>
            </div>
        );
    }
}
export default Widget;

