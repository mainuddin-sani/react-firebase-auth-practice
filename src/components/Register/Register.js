import React, { useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

    let navigate = useNavigate();
  // email get value
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  if(user){
    navigate('/home');
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (password !== confirmPassword) {
      setError("Password doesn't match...");
      return;
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
          <div className="form-group">
            <input
              type="password"
              onBlur={confirmPasswordHandler}
              placeholder="Enter Your Confirm password"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
