import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from "../img/logo.png"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("current user",user.uid);
        window.location.href = '/';
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
};

  return (
    <div className="formContainer">
    <div className="formWrapper">
        <img src={logo} alt="" className="logo"/>
        <span className="title">Login</span>
        <form>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={(e) => submitLogin(e)}>
            Login
          </button>
        </form>
        <p className="link">
          Tu n'a pas un compte ? <a href="/SignUp">crée un compte</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
