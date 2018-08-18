import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/index';

const routes = () => (
    <Router>
        <Switch>
             <Route exact path='/' render={ () => <HomePage /> }/>
        </Switch>
    </Router>
);

export default routes;