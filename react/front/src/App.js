import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {blue500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import About from './views/About';
import Home from './views/Home';
import NoMatch from './views/NoMatch';
import Individuals from './views/Individuals';

import Navigation from './components/navigation';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';


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

            <Route path="/individuals/:idIndividual" component={Individuals}/>

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
