import React, { useState } from "react";
import {Container, Top, Header, IconNav, Section, Bottom} from '../../globalStyles';

import './login.css';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = ''; //GET request to the REST API, trying to find the current user by his name.
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // JSX code for login form
    const renderForm = (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Adresse Email </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
                <label>Mot de passe </label>
                <input type="password" name="pass" required />
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
        </Section>
        <Bottom>
          
        </Bottom>
    </Container>
  );
};

export default Login;
