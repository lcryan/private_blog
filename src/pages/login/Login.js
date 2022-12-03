import React from 'react';
import "./Login.css"

function Login({toggleLogin}) {
    return (
        <>
            <h3>Log in here </h3>
            <div className="button-section">
                <button type="button" className="login-button" onClick={toggleLogin}>Login</button>
            </div>
        </>
    );
}

export default Login;