import React from "react";
import BurgerMenu from '../core/components/burger-menu/burgerMenu';
import ContentBox from '../core/components/content-box/content-box';
import {Container, Top, Header, Section, IconNav} from '../globalStyles';

const Presentation = () => {
  return (
    <Container>
      <Top>
        <Header>
          <h1>Page Presentation</h1>
        </Header>
        <IconNav>
          <BurgerMenu/>
        </IconNav>  
      </Top>
      <Section>
        <ContentBox
          title='Conception'
          text="La conception de la Bugatti Chiron a nécessité des années de recherche et d'étude, aussi bien sur le plan mécanique, aéronautique, pneumatique qu'auditif.dddddddddd"
          path='design/car-sketch.jpeg'
        />
        <br/><br/>
        <ContentBox
          title='Conception'
          text="La conception de la Bugatti Chiron a nécessité des années de recherche et d'étude, aussi bien sur le plan mécanique, aéronautique, pneumatique qu'auditif."
          path='design/car-sketch.jpeg'
        />
        <br/>
        <ContentBox
          title='Conception'
          text="La conception de la Bugatti Chiron a nécessité des années de recherche et d'étude, aussi bien sur le plan mécanique, aéronautique, pneumatique qu'auditif."
          path='design/car-sketch.jpeg'
        />
        <br/>
        <ContentBox
          title='Conception'
          text="La conception de la Bugatti Chiron a nécessité des années de recherche et d'étude, aussi bien sur le plan mécanique, aéronautique, pneumatique qu'auditif."
          path='design/car-sketch.jpeg'
        />
        <br/>
        <ContentBox
          title='Conception'
          text="La conception de la Bugatti Chiron a nécessité des années de recherche et d'étude, aussi bien sur le plan mécanique, aéronautique, pneumatique qu'auditif."
          path='design/car-sketch.jpeg'
        />
        <br/>
        <ContentBox
          title='Conception'
          text="La conception de la Bugatti Chiron a nécessité des années de recherche et d'étude, aussi bien sur le plan mécanique, aéronautique, pneumatique qu'auditif."
          path='design/car-sketch.jpeg'
        />

      </Section>
    </Container>
  );
};

export default Presentation;