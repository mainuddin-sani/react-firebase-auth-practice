import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // email get value
    const emailHandler = event =>{
        setEmail(event.target.value);
    }
    const passwordHandler = event =>{
        setPassword(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Login </h1>
            <form action="#" onSubmit={formSubmitHandler}>
                <div className="login-heads">
                    <div className="form-group">
                        <input type="email" onBlur={emailHandler}  placeholder='Enter Your Email' />
                    </div>
                    <div className="form-group">
                        <input type="password" onBlur={passwordHandler} placeholder='Enter Your password' />
                    </div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;