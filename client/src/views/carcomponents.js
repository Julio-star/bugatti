import React from "react";
import BurgerMenu from '../core/components/burger-menu/burgerMenu';
import ContentBox from "../core/components/content-box/content-box";
import SideBar from "../core/components/side-bar/side-bar";
import { Container, Top, Header, IconNav, Section } from '../globalStyles';

const Components = () => {

  let component = new {}();
  //let pattern='motor_piece/';

  /*function _contentSelector() {
    switch (SideBar.this.state) {
      case SideBar.this.state.firstParams:
        component.title='Le Moteur';
        component.description='adazdazidjaziojdazjiodazjdiadazjdaojdoazdjaiz';
        component.image=pattern+'moteur.jpeg';
        break;
      case SideBar.this.state.secondParams:
        component.title='La boite de vitesse';
        component.description='';
        component.image=pattern+'';
        break;
      case SideBar.this.state.thirdParams:
        component.title='Le vilebrequin';
        component.description='';
        component.image=pattern+'';
        break;
      case SideBar.this.state.fourthParams:
        component.title='Les pistons';
        component.description='';
        component.image=pattern+'';
        break;
      case SideBar.this.state.fifthParams:
        component.title='Le carter';
        component.description='';
        component.image=pattern+'';
        break;
      default:
        console.log(`Sorry, we are out of components.`);
    }
  }*/


  return (
    <Container>
      <Top>
        <Header>
          <h1>Page car components</h1>
        </Header>
        <IconNav>
          <BurgerMenu />
        </IconNav>
      </Top>
      <SideBar
        title='Choix'
        firstParams='Le Moteur'
        secondParams=''
        thirdParams=''
        fourthParams=''
        fifthParams=''
      />
      <Section>
        <ContentBox
          title={component.title}
          text={component.description}
          path={component.image}
        />
      </Section>
    </Container>
  );
};

export default Components;