import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/navigation';

//import Button from 'material-ui/Button';
import axios from 'axios';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Tree</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn><Link to="/asdfasdf">asdfasdf</Link></TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Randal White</TableRowColumn>
          <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Stephanie Sanders</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>Christopher Nolan</TableRowColumn>
          <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  );

class Home extends Component {

    state = {
        loading: true
      };

    constructor(props) {
        super(props);
        
        

        setTimeout(() => {
            axios.get('/api/v1/app.json', {}).then(function(response){
                console.log(response.data);
                //this.setState({loading: false});
            }).catch(function (error) {
                console.log(error);
            });
        }, 1500);

        
    }
  
    render() {

        if(this.state.loading) { // if your component doesn't have to wait for an async action, remove this block 
        //return null; // render null when app is not ready
        }

        return (
            <div className="Home">
                

                <TableExampleSimple />
                
            </div>
        );
    }
}

export default Home;