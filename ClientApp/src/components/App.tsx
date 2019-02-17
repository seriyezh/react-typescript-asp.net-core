import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './common/Header';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
