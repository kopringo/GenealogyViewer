import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import logo from '../logo.svg';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

//<FontAwesomeIcon icon="coffee"/>

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Navigation extends Component {

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

      var idTree = this.props.idTree;

    return (
        <div>
            <AppBar
        title="Genealogy Viewer"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        /*onLeftIconButtonTouchTap={() => this._toggleDrawer()}*/
        onClick={() => this._toggleDrawer()}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </AppBar>
        <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
          <h1 className="App-title">Welcome to React ;] [{this.props.name}] <button onClick={() => alert('ok!')}>test</button></h1>
          <FontAwesomeIcon icon={["fab", "apple"]}/>
          <List>
            <ListItem primaryText="Home" leftIcon={<FontAwesomeIcon icon="coffee"/>} containerElement={<Link to="/" />} />
            <ListItem primaryText="About" leftIcon={<ContentInbox />} containerElement={<Link to="/about" />} />
            <Divider />
            <ListItem primaryText="Tree" containerElement={<Link to={`/${idTree}`} />} />
            <ListItem primaryText="Individuals" containerElement={<Link to={`/${idTree}/individuals`} />} />
            <ListItem primaryText="Places" containerElement={<Link to={`/${idTree}/places`} />} />
            <ListItem primaryText="Files" containerElement={<Link to={`/${idTree}/files`} />} />
          </List>
          
        </Drawer>

            
        </div>
    )
    };
}

export default Navigation;