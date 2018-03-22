import React, {Component} from 'react';

import './Individual.css';

import B4Container from '../components/bootstrap4/b4container';
import B4Row from '../components/bootstrap4/b4row';

import PersonPhoto from '../components/PersonPhoto';

import Navigation from '../components/navigation';

class Individual extends Component {

    render(){

        var idTree = this.props.match.params.idTree;

        return (
            <div className="Individual">
                <Navigation idTree={idTree}/>

                <B4Container>
                    <B4Row>
                        <div className="ProfileLeft col-md-3">
                            <PersonPhoto />

                            <p>Zawod</p>
                            
                        </div>
                        <div className="ProfileContent col-md-9">
    ddd
                        </div>
                    </B4Row>
                </B4Container>
            </div>
        )
    }
}

export default Individual;