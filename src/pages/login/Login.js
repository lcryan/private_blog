import React from 'react';


function Login({toggleLogin}) {
    return (
        <>
            <h3>Log in here </h3>
                <div>
            <button type="button" name="login-button" onClick={toggleLogin} >Login</button>
                </div>
        </>
    );
}

export default Login;