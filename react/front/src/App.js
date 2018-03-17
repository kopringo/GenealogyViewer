import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import About from './About';
import Home from './Home';
import NoMatch from './NoMatch';
import Navigation from './view/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ;] [{this.props.name}] <button onClick={() => alert('ok!')}>dupa</button></h1>
        </header>
        <br/><br/>
        [
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/about" component={About} />

            <Route path="/individuals/:idIndividual" component={}/>

            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch}/>
          </Switch>
        </Router>
        ]
      </div>

      
    );
  }
}

export default App;
