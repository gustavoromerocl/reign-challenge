/**https://styled-components.com/ 
 * https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle
 * https://developer.mozilla.org/es/docs/Web/CSS/grid-template-rows
*/
import styled, { createGlobalStyle } from 'styled-components';

/**Configuración de variables de estilo*/
export default {
  colors: {
    white: "#ffffff",
    softWhite: "#fcfcfc",
    lightGray: "#979797",
    softGray: "#d9d9d9",
    mediumGray: "#3b3b3b",
    gray: "#6b6b6b",
    mediumHardGray: "#343434",
    hardGray: "#606060",
    lightskyBlue: "#1797ff",
    skyBlue: "#1890ff",
  },
  fonts: {
    family: {
      brandTitle: 'Libre Baskerville',
      general: 'Roboto',
    },
    weight: {
      normal: 'normal',
      bold: '500',
    },
    size: {
      small: '11px',
      medium: '14px',
      big: '16px',
    }
  }, 
  borders: {
    light: 'solid 1px #d6d6d6',
    medium: 'solid 1px #979797',
    hard: 'solid 1px #2e2e2e',
    sky: 'solid 1px var(--azure)',
  },
  dims: {
    widths: {
      small: '30rem',
      medium: '40rem',
    },
    padding: {},
    margin: {
      small: '0 150px'
    },
    borderRadius: {
      small: '2px',
      medium: '6px',
    },
    fonts: {},
    circle: {},
  },
  shadows: {
    soft: '0 1px 4px 0 rgba(0, 21, 41, 0.12)',
  }
}

/** Estilos globales*/
export let GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
`;

/**Contenedor principal que da estructura al DOM del proyecto */
export let LayoutContainer = styled.div`
/**Se divide el viewport usando grid css */

  display: grid;
  min-height: 100vh;
  grid-template-rows: auto minmax(0,1fr) auto;

  /* Estilos del navbar */

  & nav {
    height: 114px;
    box-shadow: ${({theme}) => theme.shadows.soft};
    background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
    color: ${({theme}) => theme.colors.mediumGray};
    font-family: ${({theme}) => theme.fonts.family.brandTitle};
  }

  /* Estilos del footer */

  & footer{

  }
`;

/**Contenerdor que restringe el tamaño máximo y le entrega un margen horizontal */
export let Container = styled.div`
  max-width: 100vw;
  margin: ${ ({theme}) => theme.dims.margin.small };
`;