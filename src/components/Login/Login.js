import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login </h1>
            <form action="#">
                <div className="login-heads">
                    <div className="form-group">
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder='Enter Your password' />
                    </div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;