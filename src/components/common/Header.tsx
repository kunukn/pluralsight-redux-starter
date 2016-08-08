import * as React from 'react';
import {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

// Test typescript compiler
interface iMyInterface {
}
let a : number = 1;
// --------------------

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;