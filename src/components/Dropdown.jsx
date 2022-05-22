import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ChevronUpIcon } from '@heroicons/react/outline';
/* Importamos la store de zustand */
import useNewsStore from '../zustand/news-store';
/**Se importa shallow utilidad de zustand
 * https://docs.pmnd.rs/zustand/recipes
 */
import shallow from "zustand/shallow";

import pathAngularImage from '../utilities/images/image-138.png';
import pathReactImage from '../utilities/images/image-140.png';
import pathValueImage from '../utilities/images/image-141.png';
import { Link } from 'react-router-dom';
import devices from '../theme/breakoints'


/**Componente que recibe la url de la imagen desde las props */
let ItemIcon = styled.div`
  background: url(${(props => props.background)}) no-repeat;
  width: 24px;
  height: 24px;
  margin-left: .75rem;
`;

function Dropdown(props) {
  const [active, setActive] = useState(false);
  const btnRef = useRef();

  const {
    setFilter,
  } = useNewsStore((state) => ({
    /**Les asignamos a las variables creadas el state de la store de zustand */
    setFilter: state.setFilter,
    /**Shallow restringe el re renderizado de los componentes, lo que mejora el performance de la app*/
  }), shallow);



  useEffect(() => {
    const closeDropdown = (ev) => {
      /* console.log(btnRef.current);
      console.log(ev.path[1]); */

      /* Validamos que el elemento que disparo el evento no sea igual a la referencia creada con useRef y
      también validamos que el estado local del dropdown sea activo */
      if ( ev.path[1] !== btnRef.current && active === true) setActive(active => !active);
      
    }

    /**Agregamos el evento click al body y le pasamos la función ejecutora*/
    document.body.addEventListener('click', closeDropdown);

    /**Eliminamos el evento cuando el componente dropdown sea eliminado */
    return () => document.body.removeEventListener('click', closeDropdown);
  })

  return (
    <div className={`container-dropdown ${ props.className }`}>
      <div ref={btnRef} className={`item ${ active ? 'active' : 'unactive' }`}>
        <div className='head' onClick={() => {setActive(active => !active)}}>
          <p>Select your news</p>
          <ChevronUpIcon />
        </div>
        <ul>
          <li>
            <ItemIcon background={pathAngularImage} />
            <Link to="/" onClick={() => setFilter("angular")}>Angular</Link>
          </li>
          <li>
            <ItemIcon background={pathReactImage} />
            <Link to="/" onClick={() => setFilter("reactjs")}>React</Link>
          </li>
          <li>
            <ItemIcon background={pathValueImage} />
            <Link to="/" onClick={() => setFilter("vuejs")}>Vue</Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default styled(Dropdown)`
  &.container-dropdown {
    background: white;
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.mediumHardGray};
    font-size: ${({ theme }) => theme.fonts.size.medium};

    
    @media ${devices.mediumLaptop}{
      top: 10rem;
      position: absolute;
      z-index: 10;
      top: 12rem;
      margin-left: .25rem;
    }

    .item {
      padding: 5px;
      margin-bottom: 1rem;
      max-height: 2.5em;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      cursor: pointer;
      width: ${({ theme }) => theme.dims.widths.large};
      margin: 0 auto;

      @media ${devices.mediumLaptop}{margin-bottom: 0;}
      
      ul {
        padding: .75rem 0;
        box-shadow: 0 2px 2px 0 #dad8d8;
        width: 100%;
        li {
          display: flex;
          padding: .5rem 0;
          width: 100%;
          &:hover {
            background-color: ${({theme}) => theme.colors.rgbaGray};
          }
        }

        a:link, a:visited, a:active {
          text-decoration:none;
          color: ${({ theme }) => theme.colors.mediumHardGray};
          width: 100%;
        }
      }
    }

    /**Estilos para cuando se agrega la clase active */
    .item.active {
      max-height: 600px;
      svg {
        transform: rotate(180deg);
      }
    }

    .head {
      position: relative;
      width: 100%;
      min-height: 2em;
      line-height: 2em;
      align-items: center;
      padding: 0 0.3em;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 0 12px;

      &:hover {
        background-color: ${({theme}) => theme.colors.rgbaGray};
        border-radius: ${({ theme }) => theme.dims.borderRadius.medium};
      }

      svg {
        width: .8rem;
        height: 1rem;
        transition: ${({ theme }) => theme.animations.transition};
      }

      /**Se agrega borde con pseudoelementos */
      &::before{
        content:'';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        border: ${({ theme }) => theme.borders.hard};
        border-radius: ${({ theme }) => theme.dims.borderRadius.medium};
      }
      
    }
  }

`;