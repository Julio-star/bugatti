import React from "react";
import BurgerMenu from '../core/components/burger-menu/burgerMenu';
import Slider from '../core/components/slider/slider';
import {Container, Top, Header, IconNav, Section, Bottom} from '../globalStyles';

const Home = () => {
  return (
    <Container>
        <Top>
          <Header>
            <h1>Page Home</h1>
          </Header>
          <IconNav>
            <BurgerMenu></BurgerMenu>
          </IconNav>
        </Top>
        <Section>
          <Slider></Slider>
        </Section>
        <Bottom>
          
        </Bottom>
    </Container>
  );
};

export default Home;
