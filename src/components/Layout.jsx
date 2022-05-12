import React from 'react';
import { LayoutContainer } from '../theme';
import { Container } from '../theme';
import styled from 'styled-components';
import Header from './Header';
import { Container as ContainerOverride} from '../theme';

/**Se sobreescribe el componente Container para alinear el logo en el encabezado, a su vez se asigna un alias para evitar conflictos de nombre */
let ContainerNav = styled(ContainerOverride)`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <LayoutContainer>
      <nav>
        <ContainerNav>
          <Header />
        </ContainerNav>
      </nav>
      <main>
        <Container>
          {props.children}
        </Container>
      </main>
      <footer></footer>
    </LayoutContainer>
  )
}
