import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Top, Section, Bottom } from '../../globalStyles';

import './login.css';

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // Post user login info
    const token = _Connection();

    //console.log(window.sessionStorage.getItem('userToken'));

    // Compare user info
    if (token == null) {
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  };

  function _Connection() {
    const credentials = { email, password };
    fetch("http://localhost:3001/api/auth/login/", {
      method: "POST",
      body: JSON.stringify(credentials),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => { window.sessionStorage.setItem('userToken', data.token)
      window.sessionStorage.setItem('userID', data.user._id) });

    window.location.replace("/home");
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Adresse Email </label>
          <input type="email" name="uname" required onChange={(e) => setEmail(e.target.value)} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input type="password" name="pass" required onChange={(e) => setPassword(e.target.value)} />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <Container>
      <Top>
      </Top>
      <Section>
        <div className="login-form">
          <div className="title">Connexion</div>
          {isSubmitted ? <div>Vous êtes connecté</div> : renderForm}
        </div>
        <button type="button"><Link to="/signup">Pas encore de compte ? Inscrivez vous.</Link></button>
      </Section>
      <Bottom>

      </Bottom>
    </Container>
  );
};

export default Login;
