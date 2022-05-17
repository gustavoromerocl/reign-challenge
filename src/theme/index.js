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
    azure: "#1797ff",
    muted: "#767676",
    rgbaGray: "rgba(96, 96, 96, 0.06)",
    black65: "rgba(0, 0, 0, 0.65)"
  },
  fonts: {
    family: {
      brandTitle: 'Libre Baskerville',
      roboto: {
        regular: 'Roboto Regular',
        medium: 'Roboto Medium'
      }
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
    sky: 'solid 1px #1797ff',
  },
  dims: {
    widths: {
      verySmall: '16px',
      small: '32px',
      medium: '98px',
      large: '240px',
      extraLarge: '550px',
    },
    heights: {
      verySmall: '16px',
      small: '32px',
      medium: '90px',             
    },
    padding: {
      verySmall: '7px',
      big: '40px',
      mediumyx: '24px 22px'
    },
    margin: {
      smallLeft: '8px',
      small: '0 150px',
      horizontalCenter: '0 auto',
    },
    borderRadius: {
      small: '2px',
      medium: '10px',
      big: '6px',
    },
    fonts: {},
    circle: {},
  },
  shadows: {
    leftBottom: '0 1px 4px 0 rgba(0, 21, 41, 0.12)',
  },
  opacity: {
    soft: '0.06',
  },
  animations: {
    transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  }
}

/** Estilos globales*/
export let GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    a:link, a:visited, a:active {
      text-decoration:none;
    }
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
    box-shadow: ${({theme}) => theme.shadows.leftBottom};
    background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
    color: ${({theme}) => theme.colors.mediumGray};
    font-family: ${({theme}) => theme.fonts.family.brandTitle};
  }

  /* Estilos del footer */

  & footer{
    position: fixed;
    width: 100%;
    padding: 98px 0;
    bottom: 0;
    background-color: white;
  }

  /**Estilos del container */
`;

/**Contenedor que restringe el tamaño máximo y le entrega un margen horizontal */
export let Container = styled.div`
  max-width: 100vw;
  height: 100%;
  margin: ${ ({theme}) => theme.dims.margin.small };
`;

/**Flex containers */

export let CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
