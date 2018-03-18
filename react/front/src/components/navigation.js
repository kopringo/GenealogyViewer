import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="App">
            <Link to="/" >Home</Link>&nbsp;
            <Link to="/about" >About</Link>
        </div>
    )
}

export default Navigation;