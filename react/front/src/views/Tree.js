import React, {Component} from 'react';
//import { Link } from 'react-router-dom';

import Navigation from '../components/navigation';

//import Button from 'material-ui/Button';
import axios from 'axios';



class Tree extends Component {

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
            <div className="Tree">
                <Navigation/>
                Home...

                
                
            </div>
        );
    }
}

export default Tree;