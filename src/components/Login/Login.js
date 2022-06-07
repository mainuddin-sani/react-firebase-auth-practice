import React, { useState } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);
  
      let navigate = useNavigate();
      // email get value
      const emailHandler = (event) => {
        setEmail(event.target.value);
      };
      const passwordHandler = (event) => {
        setPassword(event.target.value);
      };
    
      if(user){
        navigate('/home');
      }
      const formSubmitHandler = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
      };
    return (
        <div>
            <h1>Login </h1>
            <form action="#" onSubmit={formSubmitHandler}>
        <div className="login-heads">
          <div className="form-group">
            <input
              type="email"
              onBlur={emailHandler}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onBlur={passwordHandler}
              placeholder="Enter Your password"
            />
          </div>
          {
              loading && <p>Loading...</p>
          }
          <p style={{ color: "red" }}>{error?.message}</p>
          <button type="submit">Login</button>
        </div>
      </form>
        </div>
    );
};

export default Login;