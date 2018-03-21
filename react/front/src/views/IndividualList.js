import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/navigation';

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
            <TableRowColumn><Link to={`/${this.state.idTree}/indiduals/${row.id}`}>{row.id}</Link></TableRowColumn>
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
                <Navigation idTree={idTree}/>

                <TableIndividuals idTree={idTree}/>
            </div>
        )
    }
}

export default IndividualList;