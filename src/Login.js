import React, { useState, useEffect } from "react";
import "./Login.css";
// import { useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase";
// import logo from "./Assets/img/Amazon-icon.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert("error.message"));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert("error.message"));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <button onClick={register} className="login__registerButton">
          Create your twitter acount
        </button>
      </div>
    </div>
  );
}

export default Login;
