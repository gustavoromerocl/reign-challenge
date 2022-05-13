import React from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/outline';

/* Componente estilizado con styled components */
let Page = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({theme}) => theme.borders.light};
  border-radius: ${({theme}) => theme.dims.borderRadius.medium};
  text-decoration: none;
  margin-left: ${({theme}) => theme.dims.margin.smallLeft};
  &:hover {
    background-color: ${({theme}) => theme.colors.softGray};
  }


`;

/**Array de números para simular las paginas desde la api */
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Pagination(props) {

  const Pages = numbers.map((el) => <Page href='#'><p className='number'>{el + 1}</p></Page>)
  return (
    <div className={`container-pagination ${props.className}`}>
      <Page>
        <ChevronLeftIcon className='left-arrow-icon' />
      </Page>
      {Pages}
      <Page >
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

    .number{
      display: inline-block;
    }

    svg {
      width: 1rem;
      height: 1.3rem;
    }

    /**Estilos de la pagina seleccionada */
    a:nth-child(3){
      background-color: ${({theme}) => theme.colors.skyBlue};
      color: ${({theme}) => theme.colors.white};
    }

    a:nth-child(1){
      margin-left: 0;
    }
  }


`;