import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import AboutPage from './AboutPage';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </Switch>
    );
}

export default Routes;
