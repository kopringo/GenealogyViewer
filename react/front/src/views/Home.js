import React, {Component} from 'react';
import { Link } from 'react-router-dom';

//import Navigation from '../components/navigation';

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

var tableData = [
    {
      hash: 'bf3dba7064f5b5032328061559edba7c',
      name: 'Testowe drzewo',
      status: {},
    },
    {
      hash: '3627801962f339e26da80f5015482fe4',
      name: 'Drugie drzewo',
      status: {},
    },
    {
      hash: 'deb7a2c436bc9b0ce7f3871e62971b6d',
      name: 'Drzecie drzewo',
      status: {},
    },
    
  ];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = () => (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Tree</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {tableData.map( (row, index) => (
        <TableRow key={index}>
          <TableRowColumn><Link to={`/${row.hash}`}>{row.hash}</Link></TableRowColumn>
          <TableRowColumn>{row.name}</TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        ))}
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