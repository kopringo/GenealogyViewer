import React, {Component} from 'react';

import Navigation from '../components/navigation';

class PlaceList extends Component {

    render(){
        var idTree = this.props.match.params.idTree;

        return (
            <div className="PlaceList">
                <Navigation idTree={idTree}/>

            PlaceList
            </div>
        )
    }
}

export default PlaceList;