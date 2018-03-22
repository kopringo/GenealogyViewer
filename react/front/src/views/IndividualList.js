import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/navigation';

import TextField from 'material-ui/TextField';

import axios from 'axios';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';

const FlatButtonExampleSimple = () => (
    <div>
      <FlatButton label="1" />
      <FlatButton label="2" primary={true} />
      <FlatButton label="3" secondary={true} />
      <FlatButton label="4" disabled={true} />

    </div>
  );

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TableIndividuals extends Component {

    data = [
        
    ];

    state = {};


    constructor(props) {
        super(props);
        var idTree = this.props.idTree;
        this.setState({idTree: idTree});

        var t = this;

        setTimeout(() => {
            axios.get(`/api/v1/tree/${idTree}/individuals.json`, {}).then(function(response){
                t.data = response.data['items'];

                t.forceUpdate();
            }).catch(function (error) {
                console.log(error);
            });
        }, 1500);

        
    }

    render(){

        var idTree = this.props.idTree;

        return (
        <Table>
        <TableHeader displaySelectAll={false}>
            <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Last name</TableHeaderColumn>
            <TableHeaderColumn>First name</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {this.data.map( (row, index) => (
            <TableRow key={index}>
            <TableRowColumn><Link to={`/${idTree}/individuals/${row.id}`}>{row.id}</Link></TableRowColumn>
            <TableRowColumn>{row.last_name}</TableRowColumn>
            <TableRowColumn>{row.first_name}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
        </Table>
        );
    }
};

class IndividualList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idTree: null
        }

        var idTree = this.props.match.params.idTree;
        this.setState({idTree: idTree});
    }


    render(){

        var idTree = this.props.match.params.idTree;

        return (
            <div className="IndividualList">
                <Navigation idTree={idTree} />

                <TextField hintText="Search field" />
                <br/>
                <FlatButtonExampleSimple />
                <br/><br/>

                <TableIndividuals idTree={idTree} />
            </div>
        )
    }
}

export default IndividualList;