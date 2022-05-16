import React from 'react';
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


/**Componente que recibe la url de la imagen desde las props */
let ItemIcon = styled.div`
  background: url(${(props => props.background)}) no-repeat;
  width: 24px;
  height: 24px;
`;

function Dropdown(props) {
  const {
    setFilter,
  } = useNewsStore((state) => ({
    /**Les asignamos a las variables creadas el state de la store de zustand */
    setFilter: state.setFilter,
    /**Shallow restringe el re renderizado de los componentes, lo que mejora el performance de la app*/
  }), shallow);

  const handleDropdown = (ev) => {
    let element = ev.target.parentNode;
    /* let parent = element.parentNode; */
    element.classList.toggle('active');
  }

  return (
    <div className={`container-dropdown ${props.className}`}>
      <div className="item">
        <div className='head' onClick={handleDropdown}>
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
    position: absolute;
    top: 10rem;
    background: white;
    border-radius: 2px;
    width: ${({ theme }) => theme.dims.widths.large};

    color: ${({ theme }) => theme.colors.mediumHardGray};
    font-size: ${({ theme }) => theme.fonts.size.medium};
    
    
    .item {
      padding: 5px;
      max-height: 2.5em;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      cursor: pointer;
      
      ul {
        padding: .75rem .75rem;
        box-shadow: 0 2px 2px 0 #dad8d8;

        li {
          display: flex;
          padding: .5rem 0;
        }

        a:link, a:visited, a:active {
          text-decoration:none;
          color: ${({ theme }) => theme.colors.mediumHardGray};
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
      min-height: 2em;
      line-height: 2em;
      align-items: center;
      padding: 0 0.3em;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 0 12px;

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