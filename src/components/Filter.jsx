import React, { useState } from 'react'
import styled from 'styled-components';
import { FilterIcon } from '@heroicons/react/solid';
import useNewsStore from '../zustand/news-store';
import shallow from "zustand/shallow";

import pathAngularImage from '../utilities/images/image-138.png';
import pathReactImage from '../utilities/images/image-140.png';
import pathValueImage from '../utilities/images/image-141.png';
import { Link } from 'react-router-dom';

/* Creamos el modal y lo iniciamos en posición left -100% par mantenerlo oculto*/
let Modal = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: ${({theme}) => theme.colors.softWhite };
  height: 100%;
  width: 100%;
  left: -100%;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  

  /* Agregamos opacidad cuando */
  &.modal-active {
    opacity: 1;
    left: 0;
  }

  ul {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 50%;
      list-style: none;
      margin: 1rem auto;
      div {display: inline-block; vertical-align: middle; }
      a {display: inline-block;}


      a:link, a:visited, a:active {
        text-decoration:none;
        color: ${({ theme }) => theme.colors.mediumHardGray};
      }
    }
  }
`;

let ItemIcon = styled.div`
  position: relative;
  
  background: url(${(props => props.background)}) no-repeat;
  width: 24px;
  height: 24px;
`;

function Filter(props) {
  const [active, setActive] = useState(false);

  /* Store de zustand */
  const { setFilter } = useNewsStore((state) => ({ setFilter: state.setFilter }), shallow);

  return (
    <>
      <div className={`${props.className} ${active ? 'modal-active' : ''}`} onClick={() => setActive(!active)}>
        <FilterIcon className={active ? 'modal-active' : ''} />
      </div>
      <Modal className={active ? 'modal-active' : ''}>
        <ul>
          <li>
            <ItemIcon background={pathAngularImage} />
            <Link to="/" onClick={() => {setFilter("angular"); setActive(!active);}}>Angular</Link>
          </li>
          <li>
            <ItemIcon background={pathReactImage} />
            <Link to="/" onClick={() => {setFilter("reactjs"); setActive(!active)}}>React</Link>
          </li>
          <li>
            <ItemIcon background={pathValueImage} />
            <Link to="/" onClick={() => {setFilter("vuejs"); setActive(!active);}}>Vue</Link>
          </li>
        </ul>
      </Modal>
    </>
  )
}

export default styled(Filter)`
  position: absolute;
  z-index: 10;
  bottom: 2rem;
  right: 2rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: ${({ theme }) => theme.borders.medium};
  padding: .4rem;
  &.modal-active {
    border-color: ${({ theme }) => theme.colors.lightskyBlue};
  }

  svg {
    color: ${({ theme }) => theme.colors.lightGray};

    &.modal-active {
      color: ${({ theme }) => theme.colors.lightskyBlue};

    }
    
  }

`;