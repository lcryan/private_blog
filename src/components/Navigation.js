import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navigation.css'

function Navigation({auth, logout}) {

    return (
        <>
            <navbar className='nav-bar'>
                <ul className="nav-list">
                    <li><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li><NavLink to="/login" className="login-link">Login</NavLink></li>
                    {auth ? <li><NavLink to="/blogposts" className="blogposts-link">Blogposts</NavLink></li> :
                        <li>Blogposts</li>}
                    <button type="button" className="logout-button" onClick={logout}>Logout</button>
                </ul>
            </navbar>

        </>

    );
}

export default Navigation;