import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/index';
import Widget from './Components/Widget/index';

const routes = () => (
    <Router>
        <Switch>
             <Route exact path='/' render={ () => <HomePage /> }/>
             <Route exact path='/widget' render={ () => <Widget /> }/>
        </Switch>
    </Router>
);

export default routes;