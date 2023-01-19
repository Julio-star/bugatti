import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Container, Top, Section, Bottom } from '../../globalStyles';

import './signup.css';

const Signup = () => {
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

    // Post user signup info
    const token = _Inscription();

    //console.log(window.sessionStorage.getItem('userToken'));

    if (token == null) {
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  };

  function _Inscription() {
    const credentials = { email, password };
    fetch("http://localhost:3001/api/auth/signup/", {
      method: "POST",
      body: JSON.stringify(credentials),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => window.sessionStorage.setItem('userToken', data.token));

  }

  // JSX code for signup form
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
          <input type="password" name="pass" required onChange={(e) =>setPassword(e.target.value)}/>
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
        <div className="signup-form">
          <div className="title">Inscription</div>
          {isSubmitted ? <div>Vous êtes inscrit</div> : renderForm}
        </div>
        <button><Link to="/">Déja un compte ? Connectez vous.</Link></button>
      </Section>
      <Bottom>
        
      </Bottom>
    </Container>
  );
};

export default Signup;
