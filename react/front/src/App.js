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
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/:idTree" component={Tree} />

            <Route exact path="/:idTree/individuals" component={IndividualList}/>
            <Route exact path="/:idTree/individuals/:idIndividual" component={Individual} />
            <Route exact path="/:idTree/places" component={PlaceList} />
            <Route exact path="/:idTree/places/:idPlace" component={Place} />
            <Route exact path="/:idTree/files" component={FileList} />

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
