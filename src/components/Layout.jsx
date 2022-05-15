import React from 'react';
import { LayoutContainer, Container, Container as ContainerOverride } from '../theme';
import styled from 'styled-components';
import Header from './Header';
import RadioButton from './RadioButton';
import Pagination from './Pagination';

/**Se sobreescribe el componente Container para alinear el logo en el encabezado, a su vez se asigna un alias para evitar conflictos de nombre */
let ContainerNav = styled(ContainerOverride)`
  display: flex;
  justify-content: start;
  align-items: center;
`;

/**Contenido principal*/
let BodyContainer = styled.div`
  max-width: 100vw;
  max-height: 70vh;
  overflow-y: scroll;
  margin: ${ ({theme}) => theme.dims.margin.small };
`

let HeadContainer = styled.div`
  padding: ${({theme}) => theme.dims.padding.big} 0;
`;

export default function Layout(props) {
  return (
    <LayoutContainer className={props.className}>
      <nav>
        <ContainerNav>
          <Header />
        </ContainerNav>
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

