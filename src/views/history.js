import React from "react";
import BurgerMenu from '../core/components/burger-menu/burgerMenu';
import {Container, Top, Header, IconNav} from '../globalStyles';

const History = () => {
  return (
    <Container>
        <Top>
            <Header>
                <h1>Page History</h1>
            </Header>
            <IconNav>
                <BurgerMenu></BurgerMenu>
            </IconNav>  
        </Top>
    </Container>
  );
};

export default History;
