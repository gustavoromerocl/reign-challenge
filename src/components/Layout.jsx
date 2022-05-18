import React from 'react';
import { LayoutContainer, Container, Container as ContainerOverride } from '../theme';
import styled from 'styled-components';
import Header from './Header';
import RadioButton from './RadioButton';
import Pagination from './Pagination';
import devices from '../theme/breakoints';

/**Se sobreescribe el componente Container para alinear el logo en el encabezado, a su vez se asigna un alias para evitar conflictos de nombre */
let HeaderContainer = styled(ContainerOverride)`
  display: flex;
  justify-content: start;
  align-items: center;
`;

/**Contenido principal*/
let BodyContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  max-height: 100vh;
  overflow-y: scroll;
  @media ${devices.mediumLaptop}{
    max-height: 70vh;
    max-width: 100vw;
    margin: ${ ({theme}) => theme.dims.margin.small };
  }
`

let HeadContainer = styled.div`
  padding: ${({theme}) => theme.dims.padding.big} 0;
`;

export default function Layout(props) {
  return (
    <LayoutContainer className={props.className}>
      <nav>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      </nav>
      <main>
        <HeadContainer>
          <RadioButton />
        </HeadContainer>
        
        <BodyContainer>
          {props.children}
        </BodyContainer>
      </main>
      <footer>
          <Pagination />
      </footer>
    </LayoutContainer>
  )
}

