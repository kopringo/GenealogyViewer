import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import createMuiTheme from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {blue500} from 'material-ui/styles/colors';
//import {List, ListItem} from 'material-ui/List';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import IndividualList from './views/IndividualList';
import Individual from './views/Individual';
import Place from './views/Place';
import PlaceList from './views/PlaceList';
import FileList from './views/FileList';
import Tree from './views/Tree';
//
import NoMatch from './views/NoMatch';

// blue500
const muiTheme = getMuiTheme({
  palette: {
    //textColor: blue500,
  },
  appBar: {
    height: 50,
    color: blue500
  },
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App"> 
          
        <Router>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/tree" component={Tree} />

            <Route path="/individuals" component={IndividualList}/>
            <Route path="/individuals/:idIndividual" component={Individual}/>
            <Route path="/places" component={PlaceList}/>
            <Route path="/places/:idPlace" component={Place}/>
            <Route path="/files" component={FileList}/>

            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
