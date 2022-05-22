import React from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/outline';
/* Importamos la store de zustand */
import useNewsStore from '../zustand/news-store';
/**Se importa shallow utilidad de zustand
 * https://docs.pmnd.rs/zustand/recipes
 */
import shallow from "zustand/shallow";

import { useMediaPredicate } from "react-media-hook";
import devices from '../theme/breakoints';

/* Componente estilizado con styled components */
let Page = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({theme}) => theme.borders.light};
  border-radius: ${({theme}) => theme.dims.borderRadius.big};
  text-decoration: none;
  margin-left: ${({theme}) => theme.dims.margin.smallLeft};  
  &:hover {
    background-color: ${({theme}) => theme.colors.rgbaGray};
    cursor: pointer;
  }
`;

/**Array de números para simular las paginas desde la api */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Pagination(props) {
  const biggerThanMd = useMediaPredicate(`${devices.mediumLaptop}`);

  const {
    setPage,
    page,
  } = useNewsStore((state) => ({
    /**Les asignamos a las variables creadas el state de la store de zustand */
    setPage: state.setPage,
    page: state.page,
    /**Shallow restringe el re renderizado de los componentes, lo que mejora el performance de la app*/
  }), shallow);
  
  /**PENDIENTE IMPLEMENTAR CONTROLADOR PARA LAS PAGINAS  */
  const Pages = numbers.map((el, index) => 
  <Page href='#' 
    onClick={() => setPage(el)} 
    key={index}
    /**Si la pagina de la store es igual al el numero de componente se le asigna la clase selected */
    className={page === el ? 'selected' : undefined} 
  >{el}
  </Page>)
  return (
    <div className={`container-pagination ${props.className}`} >
      {/* Si la página es igual a 1 salta a la ultima página sino avanza una hacia la izquierda, 
      la flecha contraria funciona igual pero de forma invertida  */}
      <Page onClick={() => setPage(page === 1 ? 9 : page - 1)}>
        <ChevronLeftIcon className='left-arrow-icon'/>
      </Page>
      {biggerThanMd ? Pages : <Page>{page}</Page>}
      <Page onClick={() => setPage(page === 9 ? 1 : page + 1)}>
        <ChevronRightIcon className='right-arrow-icon' />
      </Page>
    </div>
  )
}

export default styled(Pagination)`
  &.container-pagination {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: ${({theme}) => theme.fonts.size.medium};

    a:link, a:visited, a:active {
      color: ${({theme}) => theme.colors.black65};
    }

    svg {
      width: 1rem;
      height: 1.3rem;
    }

    /**Estilos para la página seleccionada */
    .selected {
      background-color: ${({theme}) => theme.colors.skyBlue};
      color: ${({theme}) => theme.colors.white}!important;
    }
  }


`;