import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function Navigation(props) {
    return (
        <>
        <navbar>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/login">Login</NavLink></li>
                <li> <NavLink to="/blogposts">Blogposts</NavLink></li>
            </ul>

        </navbar>

        </>

    );
}

export default Navigation;