import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'

function Navigation({auth, setAuth, logout}) {

    return (
        <>
        <navbar>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/login">Login</NavLink></li>
                {auth ? <li><NavLink to="/blogposts">Blogposts</NavLink></li> : <li>Blogposts</li>}
            </ul>

        </navbar>
            <button type="button" name="login-button" onClick={logout} >logout</button>
        </>

    );
}

export default Navigation;