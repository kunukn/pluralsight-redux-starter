import React from 'react';
import { Link } from 'react-router';
//const r = require('React');

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1> Pluralsight Administration </h1>
                <p> React, ladi da di da dum </p>
                <Link to="about"  className = "btn btn-primary btn-lg"> Learn more </Link>
            </div>
        );
    }
}

export default HomePage;