import React, { Component } from 'react';
import CardsList from '../CardsList/index.js';
import WidgetsDB from '../../data/index.js'
import chat from "../../Assets/images/chat.png";
import axios from 'axios';
import './Widget.css';



class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets: WidgetsDB,
            error: null,
            currentWidget: null,
            activeIcons: [],
            currentInput: ''
        };
        // this.updateSearch = this.updateSearch.bind(this);
        this.onWidgetClick = this.onWidgetClick.bind(this);
    }

    onChatIconClick() {
        console.log(this.state.currentWidget);
    }

    generateNewWidget () {

        const widgetToAdd = {
            platform: this.state.currentWidget,
               input: this.state.currentInput
        };
        console.log(widgetToAdd);

        // axios.post('http://localhost:4000/new', widgetToAdd)
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // });


    }

    onInputChange(event) {
        this.setState({ currentInput: event });
        console.log(this.state);
    }

    onWidgetClick (event) {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ currentWidget: event.target.value });
        this.state.activeIcons.push(event.target.value);
        this.generateNewWidget();
    }

    render() {
        return (
            <div>
                <h1>Widgets: </h1>
                <CardsList
                    onWidgetClick = { this.onWidgetClick }
                    widgets = { this.state.widgets }
                    onInputChange = { this.onInputChange.bind(this) }
                />
                <div className="chatIconList">
                    { this.state.activeIcons.length > 0 ? ( <p>Hey </p>)  : ( null ) }
                    <a className="chatIcon" onClick={ () => { this.onChatIconClick()} }>
                        <img src={ chat } alt="" width="70px" height="70px" />
                    </a>
                </div>
            </div>
        );
    }
}
export default Widget;

