import React from "react";
import BurgerMenu from '../core/components/burger-menu/burgerMenu';
import TableBox from "../core/components/table-box/table-box";
import {Container, Top, Header, IconNav, Section} from '../globalStyles';

const Records = () => {
  return (
    <Container>
      <Top>
        <Header>
          <h1>Page Records</h1>
        </Header>
        <IconNav>
          <BurgerMenu></BurgerMenu>
        </IconNav>            
      </Top>
      <Section>
        <TableBox
          title='Records de vitesse de la Bugatti Chiron'
          cat1='Dates'
          cat2='Type de record'
          cat3='Valeur retenue'
          recordsAccelerationDate='2017'
          recordsAcceleration='Acceleration : 0 à 400km/h'
          time='42 secondes'
          recordsVitesseDate='2019'
          recordsVitesse='Vitesse maximum'
          trackRecords='490'
          /><br/><br/>
          <img style={{borderRadius:"40px"}} src='images/records/bugatti-speed-records.jpeg' alt=''/>
      </Section>
    </Container>
  );
};

export default Records;