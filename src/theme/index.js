/**https://styled-components.com/ 
 * https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle
*/
import styled, { createGlobalStyle } from 'styled-components';

/**Configuración de variables*/
export default {
  colors: {},
  dims: {
    widths: {},
    padding: {},
    margin: {},
    borderRadius: {},
    fonts: {},
    circle: {},
  },
  shadows: {}
}

/** Estilos globales*/
export let GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
`;

export let LayoutContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto minmax(0,1fr) auto;

  & nav{

  }

  & footer{

  }
`;