import React, { useState } from "react";
import { Link} from "react-router-dom";
import BurgerMenu from "../../core/components/burger-menu/burgerMenu";
import { Container, Top, Section, Bottom } from '../../globalStyles';

import './account.css';

const Account = () => {
  const [errorMessages, setErrorMessages] = useState({});

  const deleting = (event) => {
    //Prevent page reload
    event.preventDefault();

    const token = _UserDeletion();

    //console.log(window.sessionStorage.getItem('userToken'));

    if (token == null) {
      setErrorMessages({ name: "", message: '' });
    }
  };

  function _UserDeletion() {
    const credentials = window.sessionStorage.getItem('userID');
    fetch("http://localhost:3001/api/auth/:id", {
      method: "DELETE",
      body: JSON.stringify(credentials),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json());

    window.location.replace("/home");
  }

  return (
    <Container>
      <Top>
        <BurgerMenu/>
      </Top>
      <Section>
        <button onClick={deleting}> Voulez-vous supprimer votre compte ?</button>
        <button type="button"><Link to="/signup">Voulez-vous mettre à jour votre compte ?</Link></button>
      </Section>
      <Bottom>
        
      </Bottom>
    </Container>
  );
};

export default Account;
