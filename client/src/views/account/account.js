import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../../core/components/burger-menu/burgerMenu";
//import UserList from "../../core/components/userList/user-list";
import { Container, Top, Section, Bottom , Header, IconNav} from '../../globalStyles';

import './account.css';

const Account = () => {
  const [isItWorking, setIsItWorking] = useState(true);

  const deleting = (event) => {
    //Prevent page reload
    event.preventDefault();

    const token = _UserDeletion();

    //console.log(window.sessionStorage.getItem('userToken'));

    if (token == null) {
      setIsItWorking(false);
    }
  };

  function _UserDeletion() {
    const userID = window.sessionStorage.getItem('userID');
    fetch("http://localhost:3001/api/auth/"+userID, {
      method: "DELETE",

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
        <Header>
          <h1>Page account</h1>
        </Header>
        <IconNav>
          <BurgerMenu></BurgerMenu>
        </IconNav>
      </Top>
      <Section>
        
        <button onClick={deleting}> Voulez-vous supprimer votre compte ?</button>
        <button type="button"><Link to="/signup">Voulez-vous mettre à jour votre compte ?</Link></button>
        {isItWorking === false ? <p>ERROR</p> : null}
      </Section>
      <Bottom>

      </Bottom>
    </Container>
  );
};

export default Account;
