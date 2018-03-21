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

  var tableData = [
    {
        "id": "1",
        "first_name": "osoba",
        "last_name": "ok",
        "father": null,
        "mother": null
    }
    
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableIndividuals = () => (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Last name</TableHeaderColumn>
          <TableHeaderColumn>First name</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {tableData.map( (row, index) => (
        <TableRow key={index}>
          <TableRowColumn><Link to={`/${row.id}`}>{row.id}</Link></TableRowColumn>
          <TableRowColumn>{row.last_name}</TableRowColumn>
          <TableRowColumn>{row.first_name}</TableRowColumn>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );

class IndividualList extends Component {

    

    constructor(props) {
        super(props);

        this.state = {
            idTree: null
        }

    }

    componentDidMount() {

        this.setState({idTree: this.props.match.params.idTree});
        var idTree = this.props.match.params.idTree;

        setTimeout(() => {
            axios.get(`/api/v1/tree/${idTree}/individuals.json`, {}).then(function(response){
                console.log(response.data['items']);
                tableData = response.data['items'];
            }).catch(function (error) {
                console.log(error);
            });
        }, 1500);
    }

    render(){
        return (
            <div className="IndividualList">
                <Navigation idTree={this.state.idTree}/>
<br/><br/>
                <TableIndividuals />
            </div>
        )
    }
}

export default IndividualList;