import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Login(props) {

    const navigate = useNavigate()
    function handleLogin(){
        navigate("/blogposts")
    }


    return (
        <>
            <h3>Log in here</h3>
            <button type="button" className="login-button" name="login-button" onClick={handleLogin}>Login</button>
        </>
    );
}

export default Login;