import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import About from './views/About';
import Home from './views/Home';
import NoMatch from './views/NoMatch';
import Navigation from './components/navigation';
import Individuals from './views/Individuals';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';



class App extends Component {

  constructor(props) {
    super(props);
    console.log('loaded');
    this.state = {
      modalVisible: false,
      drawerOpened: false
    };
  }

  _toggleDrawer(){
    this.setState({
      drawerOpened: !this.state.drawerOpened
    })
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App"> 
        
      <AppBar
        title="Genealogy Viewer"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={() => this._toggleDrawer()}
        onClick={() => this._toggleDrawer()}
      >
        
      </AppBar>
        <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ;] [{this.props.name}] <button onClick={() => alert('ok!')}>dupa</button></h1>

        </header>
        <br/>
        [
        <Router>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/about" component={About} />

            <Route path="/individuals/:idIndividual" component={Individuals}/>

            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch}/>
          </Switch>
        </Router>
        ]
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
